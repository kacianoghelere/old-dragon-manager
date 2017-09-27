import { Component, OnInit, Input } from '@angular/core';

import { Campaign } from '../../../../shared/entities/campaign';

@Component({
  selector: 'campaign-characters',
  templateUrl: './campaign-characters.component.html',
  styleUrls: ['./campaign-characters.component.scss']
})
export class CampaignCharactersComponent implements OnInit {

  @Input() campaign: Campaign;

  constructor() { }

  ngOnInit() {
  }

}
