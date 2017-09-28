import { Component, Input, OnInit } from '@angular/core';

import { Campaign } from '../../../shared/entities/campaign';

@Component({
  selector: 'campaign-card',
  templateUrl: './campaign-card.component.html',
  styleUrls: ['./campaign-card.component.scss']
})
export class CampaignCardComponent implements OnInit {

  @Input('campaign') campaign: Campaign;

  constructor() { }

  ngOnInit() {
  }

}
