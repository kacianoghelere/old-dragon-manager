import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MarkdownService, MarkdownConfig } from 'angular2-markdown';

import { Campaign } from '../../../../shared/entities/campaign';
import { CampaignWikiPage } from '../../../../shared/entities/campaign-wiki-page';
import { CampaignsService } from '../../shared/campaigns.service';
import { CampaignWikiService } from '../../shared/campaign-wiki.service';
import { TrailItem }  from "../../../../shared/entities/trail-item";
import { TrailService }  from "../../../../shared/services/trail.service";

@Component({
  selector: 'campaign-wiki',
  templateUrl: './campaign-wiki.component.html',
  styleUrls: ['./campaign-wiki.component.scss']
})
export class CampaignWikiComponent implements OnInit, OnDestroy {

  campaign: Campaign;
  pages: CampaignWikiPage[];
  subscription: Subscription;
  trailItem: TrailItem;

  constructor(
    private trailService: TrailService,
    private route: ActivatedRoute,
    private router: Router,
    private campaignsService: CampaignsService,
    private campaignWikiService: CampaignWikiService,
    private markdownService: MarkdownService,
  ) {
  }

  get wikiTitle(): string {
    return `"${this.campaign.title}" Wiki`;
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
    this.trailService.remove(this.trailItem);
  }

  /**
   * Cria novo item na trila do breadcrumb
   */
  fireTrailChange() {
    this.trailItem = {
      title: 'Wiki',
      route: `/main/campaigns/${this.campaign.id}/wiki`
    };
    this.trailService.add(this.trailItem);
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let campaign_id = params['campaign_id'];

      if (campaign_id) {
        this.campaignsService.find(campaign_id).subscribe((response) => {
          this.campaign = response;
          this.fireTrailChange();
        });
        this.subscription = this.campaignWikiService.listChildren(campaign_id)
          .subscribe((response) => this.pages = response);
      }
    });
  }
}
