import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../authentication/authentication.service';
import { Campaign } from '../../../shared/entities/campaign';
import { CampaignsService } from "../shared/campaigns.service";

@Component({
  selector: 'campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {

  subscription: Subscription;
  campaign: Campaign;
  activeTab: number = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private campaignsService: CampaignsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      if (id) {
        // this.subscription = this.campaignsService.find(id)
        //   .subscribe((response) => {
        //     this.campaign = response;
        //     console.log(this.campaign);
        //   });
        this.campaign = this.campaignsService.find(id);
      }
    });
  }

  isActiveTab(index) {
    return {active: index === this.activeTab};
  }

  setActiveTab(index) {
    this.activeTab = index;
  }
}
