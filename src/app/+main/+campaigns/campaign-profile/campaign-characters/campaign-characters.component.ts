import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../../authentication/authentication.service';
import { Campaign } from '../../../../shared/entities/campaign';
import { CampaignsService } from '../../shared/campaigns.service';
import { Character } from '../../../../shared/entities/character';

@Component({
  selector: 'campaign-characters',
  templateUrl: './campaign-characters.component.html',
  styleUrls: ['./campaign-characters.component.scss']
})
export class CampaignCharactersComponent implements OnInit, OnDestroy {

  campaign: Campaign;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private campaignsService: CampaignsService
  ) { }

  get characters(): Character[] {
    return this.campaign.characters || [];
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
