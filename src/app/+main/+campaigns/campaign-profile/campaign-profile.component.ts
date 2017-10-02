import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../authentication/authentication.service';
import { Campaign } from '../../../shared/entities/campaign';
import { Character } from '../../../shared/entities/character';
import { CoreComponent } from '../../../shared/components/core/core.component';
import { CampaignsService } from '../shared/campaigns.service';


@Component({
  selector: 'campaign-profile',
  templateUrl: './campaign-profile.component.html',
  styleUrls: ['./campaign-profile.component.scss']
})
export class CampaignProfileComponent extends CoreComponent
    implements OnInit, OnDestroy {

  campaign: Campaign;
  subscription: Subscription;

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
    private campaignsService: CampaignsService
  ) {
    super();
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id = params['id'];

      if (id) {
        this.subscription = this.campaignsService.find(id)
          .subscribe((response) => this.campaign = response);
      }
    });
  }

  /**
   * Verifica se o usuário atual pode editar a campanha
   * @return {boolean} Resultado da verificação
   */
  canEdit(): boolean {
    return false;
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

  shouldHideCharacters(): boolean {
    return !this.isActiveTab(2) || this.shouldHide(this.campaign.characters);
  }

  shouldHideNotes(): boolean {
    return !this.isActiveTab(1) || this.shouldHide(this.campaign.notes);
  }
}
