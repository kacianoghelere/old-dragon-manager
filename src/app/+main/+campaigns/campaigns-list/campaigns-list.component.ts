import { Component, OnInit } from '@angular/core';

import { Campaign } from '../../../shared/entities/campaign';
import { CampaignsService } from "../shared/campaigns.service";

@Component({
  selector: 'campaigns-list',
  templateUrl: './campaigns-list.component.html',
  styleUrls: ['./campaigns-list.component.scss']
})
export class CampaignsListComponent implements OnInit {

  campaigns: Campaign[];

  constructor(private campaignsService: CampaignsService) { }

  ngOnInit() {
    this.campaignsService.list().subscribe((campaigns) => {
      this.campaigns = campaigns;
    });
  }

}
