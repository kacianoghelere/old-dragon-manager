import { Component, OnInit, OnDestroy } from '@angular/core';

import { TrailBuilder }  from "../../shared/entities/trail-builder";
import { TrailService }  from "../../shared/services/trail.service";

@Component({
  selector: 'users',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent extends TrailBuilder {

  constructor(trailService: TrailService) {
    super(trailService, {
      title: 'Usuários',
      route: '/users'
    });
  }
}
