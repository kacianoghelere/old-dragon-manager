import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../../authentication/authentication.service';
import { Campaign } from '../../../../shared/entities/campaign';
import { CampaignJournal } from '../../../../shared/entities/campaign-journal';
import { CampaignsService } from '../../shared/campaigns.service';
import { CampaignJournalsService } from '../../shared/campaign-journals.service';

@Component({
  selector: 'campaign-journals',
  templateUrl: './campaign-journals.component.html',
  styleUrls: ['./campaign-journals.component.scss']
})
export class CampaignJournalsComponent implements OnInit, OnDestroy {

  _journals: CampaignJournal[];
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private journalsService: CampaignJournalsService
  ) { }

  get journals(): CampaignJournal[] {
    return this._journals || [];
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.route.parent.params.subscribe((params) => {
      let id = params['campaign_id'];
      console.log(params);
      if (id) {
        this.subscription = this.journalsService.listChildren(id)
          .subscribe((journals) => this._journals = journals);
      }
    });
  }
}
