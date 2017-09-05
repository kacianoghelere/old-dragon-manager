import { Component, OnInit, OnDestroy } from '@angular/core';

import { TrailBuilder }  from "../../shared/entities/trail-builder";
import { TrailService }  from "../../shared/services/trail.service";

@Component({
  selector: 'main',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./main.component.scss']
})
export class MainComponent extends TrailBuilder {

  constructor(trailService: TrailService) {
    super(trailService, {
      title: 'Principal',
      route: '/main',
      // children: [
      //   {title: 'Campanhas', route: '/main/campaigns'},
      //   {title: 'Modificadores', route: '/main/modifiers'},
      //   {title: 'Personagens', route: '/main/characters'}
      // ]
    });
  }

}
