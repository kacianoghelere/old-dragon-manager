import { Component, Input, OnInit } from '@angular/core';

import { Campaign } from '../../entities/campaign';

@Component({
  selector: 'campaign-card',
  templateUrl: './campaign-card.component.html',
  styleUrls: ['./campaign-card.component.scss']
})
export class CampaignCardComponent implements OnInit {

  @Input('campaign') campaign: Campaign;
  @Input('showDetails') showDetails: boolean = false;

  constructor() { }

  ngOnInit() {
  }
}
