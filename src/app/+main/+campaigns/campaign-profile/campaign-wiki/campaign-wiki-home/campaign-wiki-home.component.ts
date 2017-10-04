import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { Campaign } from '../../../../../shared/entities/campaign';
import { CampaignWikiPage } from '../../../../../shared/entities/campaign-wiki-page';
import { CampaignsService } from '../../../shared/campaigns.service';
import { CampaignWikiService } from '../../../shared/campaign-wiki.service';

@Component({
  selector: 'campaign-wiki-home',
  templateUrl: './campaign-wiki-home.component.html',
  styleUrls: ['./campaign-wiki-home.component.scss']
})
export class CampaignWikiHomeComponent implements OnInit, OnDestroy {

  campaign: Campaign;
  pages: CampaignWikiPage[];
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private campaignsService: CampaignsService,
    private campaignWikiService: CampaignWikiService
  ) { }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.route.parent.parent.params.subscribe((params) => {
      let campaign_id = params['campaign_id'];

      if (campaign_id) {
        this.campaignsService.find(campaign_id)
          .subscribe((response) => this.campaign = response);
        this.subscription = this.campaignWikiService.listChildren(campaign_id)
          .subscribe((response) => this.pages = response);
      }
    });
  }

}
