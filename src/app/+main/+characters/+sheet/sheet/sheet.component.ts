import { Component } from '@angular/core';

import { TrailBuilder }  from "../../../../shared/entities/trail-builder";
import { TrailService }  from "../../../../shared/services/trail.service";

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss']
})
export class SheetComponent extends TrailBuilder {

  constructor(trailService: TrailService) {
    super(trailService, {
      title: 'Ficha',
      route: '/main/characters/sheet'
    });
  }
}
