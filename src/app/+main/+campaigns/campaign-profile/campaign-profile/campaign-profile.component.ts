import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../../authentication/authentication.service';
import { Campaign } from '../../../../shared/entities/campaign';
import { Character } from '../../../../shared/entities/character';
import { CoreComponent } from '../../../../shared/components/core/core.component';
import { CampaignsService } from '../../shared/campaigns.service';
import { TrailItem } from '../../../../shared/entities/trail-item';
import { TrailService } from '../../../../shared/services/trail.service';
import { routerTransition } from '../../../../shared/constants/router-transition';

@Component({
  selector: 'campaign-profile',
  templateUrl: './campaign-profile.component.html',
  animations: [ routerTransition ],
  styleUrls: ['./campaign-profile.component.scss']
})
export class CampaignProfileComponent extends CoreComponent
    implements OnInit, OnDestroy {

  campaign: Campaign;
  subscription: Subscription;
  trailItem: TrailItem;

  /**
   * [constructor description]
   * @param  {ActivatedRoute}        route            [description]
   * @param  {Router}                router           [description]
   * @param  {FormBuilder}           formBuilder      [description]
   * @param  {AuthenticationService} authService      [description]
   * @param  {CampaignsService}      campaignsService [description]
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private campaignsService: CampaignsService,
    private trailService: TrailService
  ) {
    super();
  }

  /**
   * Verifica se o usuário atual pode editar a campanha
   * @return {boolean} Resultado da verificação
   */
  canEdit(): boolean {
    return false;
  }

  /**
   * Cria novo item na trila do breadcrumb
   */
  fireTrailChange() {
    this.trailItem = {
      title: this.campaign.title,
      route: `/main/campaigns/${this.campaign.id}`
    };
    this.trailService.add(this.trailItem);
  }

  getState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  /**
   * Verifica se o usuário atual é o mestre de jogo da campanha
   * @return {boolean} Resultado da verificação
   */
  isCampaignMember(): boolean {
    return this.campaign.characters.map((character: Character) => {
      return character.player.id;
    }).indexOf(this.authService.currentUser.id) >= 0;
  }

  /**
   * Verifica se o usuário atual é o mestre de jogo da campanha
   * @return {boolean} Resultado da verificação
   */
  isCampaignOwner(): boolean {
    return this.authService.isCurrentUser(this.campaign.dungeonMaster);
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
    this.trailService.remove(this.trailItem);
  }

  ngOnInit() {
    this.route.parent.params.subscribe((params) => {
      let id = params['campaign_id'];

      if (id) {
        this.subscription = this.campaignsService.find(id).subscribe((res) => {
          this.campaign = res;
          this.fireTrailChange();
        });
      }
    });
  }

  /**
   * Verifica se uma coleção deve ser ocultada, checando se o usuário é o
   * criador da campanha, membro da campanha ou a coleção de dados está vazia
   * @param  {any[]}   collection Coleção de dados
   * @return {boolean}            Resultado da verificação
   */
  shouldHide(collection: any[]): boolean {
    return !this.isCampaignOwner()
      && (!this.isCampaignMember() || !this.hasData(collection));
  }

  /**
   * [shouldHideNotes description]
   * @return {boolean} [description]
   */
  shouldHideCharacters(): boolean {
    return !this.isActiveTab(2) || this.shouldHide(this.campaign.characters);
  }

  /**
   * [shouldHideNotes description]
   * @return {boolean} [description]
   */
  shouldHideNotes(): boolean {
    return !this.isActiveTab(1) || this.shouldHide(this.campaign.notes);
  }

  /**
   * [shouldHideNotes description]
   * @return {boolean} [description]
   */
  shouldHideMaps(): boolean {
    return !this.isActiveTab(3);
  }
}
