import { Component, OnInit, Input } from '@angular/core';

import { Campaign } from '../../../../shared/entities/campaign';
import { CampaignJournal } from '../../../../shared/entities/campaign-journal';

@Component({
  selector: 'campaign-journals',
  templateUrl: './campaign-journals.component.html',
  styleUrls: ['./campaign-journals.component.scss']
})
export class CampaignJournalsComponent implements OnInit {

  @Input() campaign: Campaign;
  @Input() editing: Boolean;

  constructor() { }

  ngOnInit() {
  }

  addJournal() {
    this.campaign.journals.push({
      title: 'Novo diário',
      description: 'Sua descrição aqui'
    });
  }

}
