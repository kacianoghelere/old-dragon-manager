import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../../authentication/authentication.service';
import { CharacterRace, Link, TrailItem }  from "../../../../shared/models";
import { RacesService } from '../shared/races.service';
import { TrailService }  from "../../../../shared/services/trail.service";

@Component({
  selector: 'race-details',
  templateUrl: './race-details.component.html',
  styleUrls: ['./race-details.component.scss']
})
export class RaceDetailsComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  characterRace: CharacterRace;
  currentTab: number = 0;
  trailItem: TrailItem;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private racesService: RacesService,
    private trailService: TrailService
  ) { }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.trailService.remove(this.trailItem);
  }

  ngOnInit() {
    this.characterRace = {id: null, name: ''};
    this.route.params.subscribe((params) => {
      let id = params['id'];
      if (id) {
        this.subscription = this.racesService.find(id)
          .subscribe((response) => {
            this.characterRace = response;
            this.fireTrailChange();
          });
      }
    });
  }

  fireTrailChange() {
    this.trailItem = {title: this.characterRace.name};
    this.trailService.add(this.trailItem);
  }

}
