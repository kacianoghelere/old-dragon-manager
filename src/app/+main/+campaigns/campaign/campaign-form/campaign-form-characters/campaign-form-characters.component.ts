import { Component, OnInit, Input } from '@angular/core';

import { Campaign } from '../../../../../shared/entities/campaign';

@Component({
  selector: 'campaign-form-characters',
  templateUrl: './campaign-form-characters.component.html',
  styleUrls: ['./campaign-form-characters.component.scss']
})
export class CampaignFormCharactersComponent implements OnInit {

  @Input() campaign: Campaign;

  constructor() { }

  ngOnInit() {
  }

}
