import { Component, Input, OnInit } from '@angular/core';

import { CampaignWikiPage } from '../../../../../shared/entities/campaign-wiki-page';

@Component({
  selector: 'campaign-wiki-card',
  templateUrl: './campaign-wiki-card.component.html',
  styleUrls: ['./campaign-wiki-card.component.scss']
})
export class CampaignWikiCardComponent implements OnInit {

  @Input('page') page: CampaignWikiPage;

  constructor() { }

  get bodyClass(): any {
    return {
      'card-body': !(this.page.picture),
      'card-img-overlay': !!(this.page.picture)
    };
  }

  ngOnInit() {
  }

}
