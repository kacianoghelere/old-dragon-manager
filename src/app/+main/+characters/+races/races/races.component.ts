import { Component } from '@angular/core';

import { TrailBuilder }  from "../../../../shared/entities/trail-builder";
import { TrailService }  from "../../../../shared/services/trail.service";

@Component({
  selector: 'races',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./races.component.scss']
})
export class RacesComponent extends TrailBuilder {

  constructor(trailService: TrailService) {
    super(trailService, {title: 'Raças', route: '/main/characters/races'});
  }
}
