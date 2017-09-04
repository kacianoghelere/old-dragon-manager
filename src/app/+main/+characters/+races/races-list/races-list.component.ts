import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthenticationService } from '../../../../authentication/authentication.service';
import { CharacterRace } from '../../../../shared/entities/character-race';
import { Link } from '../../../../shared/entities/link';
import { RacesService } from '../shared/races.service';

@Component({
  selector: 'app-races',
  templateUrl: './races-list.component.html',
  styleUrls: ['./races-list.component.scss']
})
export class RacesListComponent implements OnInit, OnDestroy {

  // Public variables
  // ---------------------------------------------------------------------------
  subscription: Subscription;
  races: CharacterRace[];
  trail: Link[];

  //
  // Functions
  // ===========================================================================
  constructor(
    private authService: AuthenticationService,
    private racesService: RacesService
  ) {
    this.trail = [
      {title: 'Personagens', route: '/main/characters'}
    ]
  }

  //
  // Lifecycle hooks functions
  // ---------------------------------------------------------------------------

  ngOnInit() {
    this.subscription = this.racesService.list()
      .subscribe((response) => this.races = response);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
