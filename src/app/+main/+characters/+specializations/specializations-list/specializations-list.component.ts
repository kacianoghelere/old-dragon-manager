import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthenticationService } from '../../../../authentication/authentication.service';
import { CharacterSpecialization } from '../../../../shared/entities/character-specialization';
import { Link } from '../../../../shared/entities/link';
import { SpecializationsService } from '../shared/specializations.service';

@Component({
  selector: 'specializations-list',
  templateUrl: './specializations-list.component.html',
  styleUrls: ['./specializations-list.component.scss']
})
export class SpecializationsListComponent implements OnInit, OnDestroy {

  specializations: CharacterSpecialization[];
  subscription: Subscription;

  constructor(
    private authService: AuthenticationService,
    private specializationsService: SpecializationsService
  ) { }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.specializationsService.list()
      .subscribe((response) => this.specializations = response);
  }

}
