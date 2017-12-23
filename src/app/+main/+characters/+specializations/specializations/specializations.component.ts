import { Component, OnInit } from '@angular/core';

import { TrailBuilder }  from "../../../../shared/entities/trail-builder";
import { TrailService }  from "../../../../shared/services/trail.service";

@Component({
  selector: 'app-specializations',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./specializations.component.scss']
})
export class SpecializationsComponent extends TrailBuilder {

  constructor(trailService: TrailService) {
    super(trailService, {
      title: 'Especializações',
      route: '/main/characters/specializations'
    });
  }
}
