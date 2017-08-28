import { Component, OnInit, Input } from '@angular/core';

import { Campaign } from '../../../../shared/entities/campaign';

@Component({
  selector: 'campaign-notes',
  templateUrl: './campaign-notes.component.html',
  styleUrls: ['./campaign-notes.component.scss']
})
export class CampaignNotesComponent implements OnInit {

  @Input() campaign: Campaign;

  constructor() { }

  ngOnInit() {
  }

}
