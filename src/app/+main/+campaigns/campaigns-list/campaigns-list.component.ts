import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../../authentication/authentication.service';
import { Campaign } from '../../../shared/entities/campaign';
import { CampaignsService } from "../shared/campaigns.service";

@Component({
  selector: 'campaigns-list',
  templateUrl: './campaigns-list.component.html',
  styleUrls: ['./campaigns-list.component.scss']
})
export class CampaignsListComponent implements OnInit {

  campaigns: Campaign[];

  constructor(
    protected authService: AuthenticationService,
    private campaignsService: CampaignsService
  ) { }

  /**
   * Verifica se o usuário atual é o Narrador da campanha
   * @param  {Campaign} campaign Campanha
   * @return {boolean}           Resultado da verificação
   */
  isCampaignOwner(campaign: Campaign): boolean {
    return this.authService.isCurrentUser(campaign.dungeonMaster);
  }

  ngOnInit() {
    this.campaignsService.list().subscribe((campaigns) => {
      this.campaigns = campaigns;
    });
  }

}
