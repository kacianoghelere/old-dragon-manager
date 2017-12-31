import { Component, Input, OnInit } from '@angular/core';

import { CampaignPage } from '../../../../../shared/models';

@Component({
  selector: 'campaign-page-card',
  templateUrl: './campaign-page-card.component.html',
  styleUrls: ['./campaign-page-card.component.scss']
})
export class CampaignPageCardComponent implements OnInit {

  @Input('page') page: CampaignPage;

  constructor() { }

  get bodyClass(): any {
    return {
      'card-body': !(this.page.picture),
      'card-img-overlay': !!(this.page.picture)
    };
  }

  getCoverUrl(): string {
    let title = this.page.title.replace(/[\s]/g, '');
    return this.page.picture || `https://fakeimg.pl/640x480/?text=${title}`;
  }

  ngOnInit() {
  }

}
