import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../../authentication/authentication.service';
import { CharacterRace } from '../../../../shared/entities/character-race';
import { RacesService } from '../races.service';

@Component({
  selector: 'app-race-details',
  templateUrl: './race-details.component.html',
  styleUrls: ['./race-details.component.scss']
})
export class RaceDetailsComponent implements OnInit, OnDestroy {

  // Public variables
  // ---------------------------------------------------------------------------
  subscription: Subscription;
  characterRace: CharacterRace;
  currentTab: number = 0;

  //
  // Functions
  // ===========================================================================

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private racesService: RacesService
  ) { }

  //
  // Lifecycle hooks functions
  // ---------------------------------------------------------------------------

  ngOnInit() {
    this.characterRace = new CharacterRace;
    this.route.params.subscribe((params) => {
      let id = params['id'];
      if (id) {
        this.subscription = this.racesService.find(id)
          .subscribe((response) => {
            this.characterRace = response;
            console.log(this.characterRace);
          });
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
