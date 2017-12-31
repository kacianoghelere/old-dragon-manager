import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../../authentication/authentication.service';
import { CharacterSpecialization, TrailItem }  from "../../../../shared/models";
import { CoreComponent } from '../../../../shared/components/core/core.component';
import { SpecializationsService } from '../shared/specializations.service';
import { TrailService }  from "../../../../shared/services/trail.service";

@Component({
  selector: 'specialization-profile',
  templateUrl: './specialization-profile.component.html',
  styleUrls: ['./specialization-profile.component.scss']
})
export class SpecializationProfileComponent extends CoreComponent
    implements OnInit, OnDestroy {

  specialization: CharacterSpecialization;
  subscription: Subscription;
  trailItem: TrailItem;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private specializationsService: SpecializationsService,
    private trailService: TrailService
  ) {
    super();
  }

  fireTrailChange() {
    this.trailItem = {title: this.specialization.name};
    this.trailService.add(this.trailItem);
  }

  isSpecializationOwner() : boolean {
    return this.specializationsService.belongToCurrentUser(this.specialization);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.trailService.remove(this.trailItem);
  }

  ngOnInit() {
      this.route.params.subscribe((params) => {
        let id = params['id'];
        if (id) {
          this.subscription = this.specializationsService.find(id)
            .subscribe((response) => {
              this.specialization = response;
              this.fireTrailChange();
            });
        }
      });
  }

}
