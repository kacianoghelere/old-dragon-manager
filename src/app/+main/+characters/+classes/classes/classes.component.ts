import { Component } from '@angular/core';

import { TrailBuilder }  from "../../../../shared/entities/trail-builder";
import { TrailService }  from "../../../../shared/services/trail.service";

@Component({
  selector: 'classes',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent extends TrailBuilder {

  constructor(trailService: TrailService) {
    super(trailService, {title: 'Classes', route: '/main/characters/classes'});
  }
}
