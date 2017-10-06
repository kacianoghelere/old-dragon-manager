import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../../authentication/authentication.service';
import { Campaign } from '../../../../shared/entities/campaign';
import { CampaignMap } from '../../../../shared/entities/campaign-map';
import { CampaignsService } from '../../shared/campaigns.service';
import { CampaignMapsService } from '../../shared/campaign-maps.service';


@Component({
  selector: 'campaign-maps',
  templateUrl: './campaign-maps.component.html',
  styleUrls: ['./campaign-maps.component.scss']
})
export class CampaignMapsComponent implements OnInit {

  _maps: CampaignMap[];
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private mapsService: CampaignMapsService
  ) { }

  get maps(): CampaignMap[] {
    return this._maps || [];
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.route.parent.params.subscribe((params) => {
      let id = params['campaign_id'];
      console.log(params);
      if (id) {
        this.subscription = this.mapsService.listChildren(id)
          .subscribe((maps) => this._maps = maps);
      }
    });
  }
}
