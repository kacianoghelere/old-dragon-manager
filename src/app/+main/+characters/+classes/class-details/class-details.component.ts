import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ClassesService } from '../../shared/classes.service';
import { AuthenticationService } from '../../../../authentication/authentication.service';
import { CoreComponent } from '../../../../shared/components/core/core.component';
import { CharacterClass } from '../../../../shared/entities/character-class';
import { Link } from '../../../../shared/entities/link';
import { TrailItem }  from "../../../../shared/entities/trail-item";
import { TrailService }  from "../../../../shared/services/trail.service";

@Component({
  selector: 'class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.scss']
})
export class ClassDetailsComponent extends CoreComponent
    implements OnInit, OnDestroy {

  // Public variables
  // ---------------------------------------------------------------------------
  subscription: Subscription;
  characterClass: CharacterClass;
  currentTab: number = 1;
  trailItem: TrailItem;

  //
  // Functions
  // ===========================================================================

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private classesService: ClassesService,
    private trailService: TrailService
  ) {
    super();
  }

  //
  // Lifecycle hooks functions
  // ---------------------------------------------------------------------------

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.trailService.remove(this.trailItem);
  }

  ngOnInit() {
    this.characterClass = {
      id: null,
      name: ''
    };
    this.route.params.subscribe((params) => {
      let id = params['id'];
      if (id) {
        this.subscription = this.classesService.showcase(id)
          .subscribe((response) => {
            this.characterClass = response;
            this.fireTrailChange();
          });
      }
    });
  }

  fireTrailChange() {
    this.trailItem = {title: this.characterClass.name};
    this.trailService.add(this.trailItem);
  }

  isSelectedTab(index: number): boolean {
    return index === this.currentTab;
  }

  selectTab(index: number) {
    this.currentTab = index;
  }

}
