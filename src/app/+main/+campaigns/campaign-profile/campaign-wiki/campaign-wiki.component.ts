import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CampaignWikiPage } from '../../../../shared/entities/campaign-wiki-page';
import { CampaignsService } from '../../shared/campaigns.service';
import { TrailBuilder }  from "../../../../shared/entities/trail-builder";
import { TrailService }  from "../../../../shared/services/trail.service";

@Component({
  selector: 'campaign-wiki',
  templateUrl: './campaign-wiki.component.html',
  styleUrls: ['./campaign-wiki.component.scss']
})
export class CampaignWikiComponent extends TrailBuilder implements OnInit, OnDestroy {

  pages: CampaignWikiPage[];
  subscription: Subscription;

  constructor(
    trailService: TrailService,
    private route: ActivatedRoute,
    private router: Router,
    private campaignsService: CampaignsService
  ) {
    super(trailService, {title: 'Wiki'});
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id = params['campaign_id'];

      if (id) {
        this.subscription = this.campaignsService.listPages(id)
          .subscribe((response) => this.pages = response);
      }
    });
  }


}
