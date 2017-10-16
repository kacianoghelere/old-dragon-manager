import { Subscription } from 'rxjs/Subscription';

import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../../../authentication/authentication.service';
import { Campaign } from '../../../../../shared/entities/campaign';
import { CampaignJournal } from '../../../../../shared/entities/campaign-journal';
import { CampaignsService } from '../../../shared/campaigns.service';
import { CampaignJournalsService } from '../shared/campaign-journals.service';

@Component({
  selector: 'campaign-journals-list',
  templateUrl: './campaign-journals-list.component.html',
  styleUrls: ['./campaign-journals-list.component.scss']
})
export class CampaignJournalsListComponent implements OnInit, OnDestroy {

  campaign: Campaign;
  _journals: CampaignJournal[];
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private campaignsService: CampaignsService,
    private journalsService: CampaignJournalsService
  ) { }

  compileText(text: string) {
    return this.journalsService.compileText(text, this.isCampaignOwner());
  }

  get journals(): CampaignJournal[] {
    return this._journals;
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
    this.route.parent.parent.parent.params.subscribe((params) => {
      let campaign_id = params['campaign_id'];
      // console.log(params);
      if (campaign_id) {
        this.campaignsService.find(campaign_id).subscribe((res) => {
          this.campaign = res;
          this.subscription = this.journalsService.listChildren(campaign_id)
          .subscribe((journals) => this._journals = journals);
        });
      }
    });
  }

  /**
   * Verifica se deve exibir o toolbar
   * @return {boolean} Resultado da verificação
   */
  showToolbar(): boolean {
    return !!(this.campaign) && this.isCampaignOwner();
  }
}
