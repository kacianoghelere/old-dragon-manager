import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthenticationService } from '../../../../authentication/authentication.service';
import { CharacterRace, Link } from '../../../../shared/models';
import { RacesService } from '../../shared/races.service';

@Component({
  selector: 'races-list',
  templateUrl: './races-list.component.html',
  styleUrls: ['./races-list.component.scss']
})
export class RacesListComponent implements OnInit, OnDestroy {

  races: CharacterRace[];
  subscription: Subscription;

  constructor(
    private authService: AuthenticationService,
    private racesService: RacesService
  ) { }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.racesService.list()
      .subscribe((response) => this.races = response);
  }

}
