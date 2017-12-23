import { Component } from '@angular/core';

import { TrailBuilder }  from "../../../shared/entities/trail-builder";
import { TrailService }  from "../../../shared/services/trail.service";

@Component({
  selector: 'campaigns',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent extends TrailBuilder {

  constructor(trailService: TrailService) {
    super(trailService, {
      title: 'Campanhas',
      route: '/main/campaigns'
    });
  }
}
