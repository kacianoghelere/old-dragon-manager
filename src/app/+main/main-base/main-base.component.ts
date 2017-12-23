import { Component, OnInit, OnDestroy } from '@angular/core';

import { TrailBuilder }  from "../../shared/entities/trail-builder";
import { TrailService }  from "../../shared/services/trail.service";

@Component({
  selector: 'main-base',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./main-base.component.scss']
})
export class MainBaseComponent extends TrailBuilder {

  constructor(trailService: TrailService) {
    super(trailService, {
      title: 'Principal',
      route: '/main'
    });
  }

}
