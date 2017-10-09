import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../../../authentication/authentication.service';
import { Campaign } from '../../../../../shared/entities/campaign';
import { CampaignsService } from '../../../shared/campaigns.service';
import { CampaignCharactersService } from '../../../shared/campaign-characters.service';
import { Character } from '../../../../../shared/entities/character';

@Component({
  selector: 'campaign-characters-list',
  templateUrl: './campaign-characters-list.component.html',
  styleUrls: ['./campaign-characters-list.component.scss']
})
export class CampaignCharactersListComponent implements OnInit, OnDestroy {

  campaign: Campaign;
  _characters: Character[];
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private campaignsService: CampaignsService,
    private charactersService: CampaignCharactersService
  ) { }

  get characters(): Character[] {
    return this.characters || [];
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
  }

  ngOnInit() {
    this.route.parent.parent.params.subscribe((params) => {
      let campaign_id = params['campaign_id'];
      console.log(params);
      if (campaign_id) {
        this.subscription = this.campaignsService.find(campaign_id)
          .subscribe((campaign) => {
            this.campaign = campaign;
            this.charactersService.listChildren(campaign_id)
              .subscribe((characters) => this._characters = characters);
          });
      }
    });
  }
}
