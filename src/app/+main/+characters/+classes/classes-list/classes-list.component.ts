import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthenticationService } from '../../../../authentication/authentication.service';
import { CharacterClass, Link } from '../../../../shared/models';
import { ClassesService } from '../../shared/classes.service';

@Component({
  selector: 'classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.scss']
})
export class ClassesListComponent implements OnInit {

  subscription: Subscription;
  classes: CharacterClass[];
  trail: Link[];

  constructor(
    private authService: AuthenticationService,
    private classesService: ClassesService
  ) {
    this.trail = [{title: 'Personagens', route: '/main/characters'}]
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.classesService.list()
      .subscribe((response) => this.classes = response);
  }

}
