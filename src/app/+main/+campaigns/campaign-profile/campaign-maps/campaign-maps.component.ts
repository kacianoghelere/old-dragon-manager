import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../../authentication/authentication.service';
import { Campaign } from '../../../../shared/entities/campaign';
import { CampaignMap } from '../../../../shared/entities/campaign-map';
import { CampaignsService } from '../../shared/campaigns.service';


@Component({
  selector: 'campaign-maps',
  templateUrl: './campaign-maps.component.html',
  styleUrls: ['./campaign-maps.component.scss']
})
export class CampaignMapsComponent implements OnInit {

  campaign: Campaign;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private campaignsService: CampaignsService
  ) { }

  get maps(): CampaignMap[] {
    return this.campaign.maps || [];
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.route.parent.params.subscribe((params) => {
      let id = params['campaign_id'];
      console.log(params);
      if (id) {
        this.subscription = this.campaignsService.find(id)
          .subscribe((res) => this.campaign = res);
      }
    });
  }
}
