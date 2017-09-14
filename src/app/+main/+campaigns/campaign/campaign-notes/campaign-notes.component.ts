import { Component, OnInit, Input } from '@angular/core';

import { Campaign } from '../../../../shared/entities/campaign';
import { CampaignNote } from '../../../../shared/entities/campaign-note';

@Component({
  selector: 'campaign-notes',
  templateUrl: './campaign-notes.component.html',
  styleUrls: ['./campaign-notes.component.scss']
})
export class CampaignNotesComponent implements OnInit {

  @Input('notes') notes: CampaignNote[];

  constructor() { }

  ngOnInit() {
  }
}
