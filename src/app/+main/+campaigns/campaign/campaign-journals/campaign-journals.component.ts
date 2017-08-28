import { Component, OnInit, Input } from '@angular/core';

import { Campaign } from '../../../../shared/entities/campaign';

@Component({
  selector: 'campaign-journals',
  templateUrl: './campaign-journals.component.html',
  styleUrls: ['./campaign-journals.component.scss']
})
export class CampaignJournalsComponent implements OnInit {

  @Input() campaign: Campaign;

  constructor() { }

  ngOnInit() {
  }

}
