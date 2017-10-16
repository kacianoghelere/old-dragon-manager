import { Subscription } from 'rxjs/Subscription';

import { Component, HostBinding, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../../../authentication/authentication.service';
import { Campaign } from '../../../../../shared/entities/campaign';
import { CampaignMap } from '../../../../../shared/entities/campaign-map';
import { CampaignsService } from '../../../shared/campaigns.service';
import { CampaignMapsService } from '../shared/campaign-maps.service';

@Component({
  selector: 'campaign-maps-list',
  templateUrl: './campaign-maps-list.component.html',
  styleUrls: ['./campaign-maps-list.component.scss']
})
export class CampaignMapsListComponent implements OnInit {

  campaign: Campaign;
  _maps: CampaignMap[];
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private campaignsService: CampaignsService,
    private mapsService: CampaignMapsService
  ) { }

  /**
   * Verifica se o usuário atual é o mestre de jogo da campanha
   * @return {boolean} Resultado da verificação
   */
  isCampaignOwner(): boolean {
    return this.authService.isCurrentUser(this.campaign.dungeonMaster);
  }

  get maps(): CampaignMap[] {
    return this._maps || [];
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.route.parent.parent.parent.params.subscribe((params) => {
      let campaign_id = params['campaign_id'];
      if (campaign_id) {
        this.campaignsService.find(campaign_id).subscribe((res) => {
          this.campaign = res;
          this.subscription = this.mapsService.listChildren(campaign_id)
            .subscribe((maps) => this._maps = maps);
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
