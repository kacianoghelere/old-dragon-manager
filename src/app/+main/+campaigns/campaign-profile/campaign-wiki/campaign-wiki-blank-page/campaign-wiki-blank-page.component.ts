import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MarkdownService } from 'angular2-markdown';

import { AuthenticationService } from '../../../../../authentication/authentication.service';
import { Campaign } from '../../../../../shared/entities/campaign';
import { CampaignWikiPage } from '../../../../../shared/entities/campaign-wiki-page';
import { CampaignsService } from '../../../shared/campaigns.service';
import { CampaignWikiService } from '../shared/campaign-wiki.service';

@Component({
  selector: 'campaign-wiki-blank-page',
  templateUrl: './campaign-wiki-blank-page.component.html',
  styleUrls: ['./campaign-wiki-blank-page.component.scss']
})
export class CampaignWikiBlankPageComponent implements OnInit, OnDestroy{

  campaign: Campaign;
  campaign_id: number;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private campaignsService: CampaignsService
  ) { }

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
    this.route.parent.parent.parent.params.subscribe((params) => {
      this.campaign_id = params['campaign_id'];
      this.subscription = this.campaignsService.find(this.campaign_id)
        .subscribe((campaign) => this.campaign = campaign);
    });
  }
}
