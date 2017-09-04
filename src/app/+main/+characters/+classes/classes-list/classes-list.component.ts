import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthenticationService } from '../../../../authentication/authentication.service';
import { CharacterClass } from '../../../../shared/entities/character-class';
import { Link } from '../../../../shared/entities/link';
import { ClassesService } from '../shared/classes.service';

@Component({
  selector: 'classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.scss']
})
export class ClassesListComponent implements OnInit {

  // Public variables
  // ---------------------------------------------------------------------------
  subscription: Subscription;
  classes: CharacterClass[];
  trail: Link[];

  //
  // Functions
  // ===========================================================================
  constructor(
    private authService: AuthenticationService,
    private classesService: ClassesService
  ) {
    this.trail = [
      {title: 'Personagens', route: '/main/characters'}
    ]
  }

  //
  // Lifecycle hooks functions
  // ---------------------------------------------------------------------------

  ngOnInit() {
    this.subscription = this.classesService.list()
      .subscribe((response) => this.classes = response);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
