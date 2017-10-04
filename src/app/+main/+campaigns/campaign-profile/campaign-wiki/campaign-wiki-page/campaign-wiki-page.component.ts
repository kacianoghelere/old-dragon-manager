import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MarkdownService } from 'angular2-markdown';

import { CampaignWikiPage } from '../../../../../shared/entities/campaign-wiki-page';
import { CampaignWikiService } from '../../../shared/campaign-wiki.service';
import { TrailBuilder }  from "../../../../../shared/entities/trail-builder";
import { TrailService }  from "../../../../../shared/services/trail.service";

@Component({
  selector: 'campaign-wiki-page',
  templateUrl: './campaign-wiki-page.component.html',
  styleUrls: ['./campaign-wiki-page.component.scss']
})
export class CampaignWikiPageComponent implements OnInit, OnDestroy {

  page: CampaignWikiPage;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private campaignWikiService: CampaignWikiService
  ) { }

  compileText(text: string) {
    return this.campaignWikiService.compileText(text);
  }

  fireStarter(text: string) {
    console.log(`Starting fire on ${text}`);
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let campaign_id = params['campaign_id'];
      let page_id = params['page_id'];

      if (campaign_id && page_id) {
        this.subscription = this.campaignWikiService
          .findChild(campaign_id, page_id).subscribe((response) => {
            this.page = response;
          });
      }
    });
  }

}
