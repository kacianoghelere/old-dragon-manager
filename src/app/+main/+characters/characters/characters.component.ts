import { Component } from '@angular/core';

import { TrailBuilder }  from "../../../shared/entities/trail-builder";
import { TrailService }  from "../../../shared/services/trail.service";

@Component({
  selector: 'characters',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent extends TrailBuilder {

  constructor(trailService: TrailService) {
    super(trailService, {
      title: 'Personagens',
      route: '/main/characters',
      // children: [
      //   {title: 'Raças', route: '/main/characters/races'},
      //   {title: 'Classes', route: '/main/characters/classes'},
      //   {title: 'Especializações', route: '/main/characters/specializations'}
      // ]
    });
  }
}
