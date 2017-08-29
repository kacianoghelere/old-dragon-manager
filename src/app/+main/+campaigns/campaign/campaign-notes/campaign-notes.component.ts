import { Component, OnInit, Input } from '@angular/core';

import { Campaign } from '../../../../shared/entities/campaign';
import { CampaignNote } from '../../../../shared/entities/campaign-note';

@Component({
  selector: 'campaign-notes',
  templateUrl: './campaign-notes.component.html',
  styleUrls: ['./campaign-notes.component.scss']
})
export class CampaignNotesComponent implements OnInit {

  @Input() campaign: Campaign;
  @Input() editing: Boolean;

  constructor() { }

  ngOnInit() {
  }

  addNote() {
    this.campaign.notes.push({
      description: 'Sua descrição aqui',
      dm_only: true
    });
  }

}
