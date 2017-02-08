import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../../authentication/authentication.service';
import { CharacterClass } from '../../../../shared/entities/character-class';
import { CharacterClassType } from '../../../../shared/entities/character-class-type';
import { ClassesService } from '../classes.service';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.scss']
})
export class ClassDetailsComponent implements OnInit {

  // Public variables
  // ---------------------------------------------------------------------------
  subscription: Subscription;
  characterClass: CharacterClass;
  currentTab: number = 0;

  //
  // Functions
  // ===========================================================================

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private classesService: ClassesService
  ) { }

  //
  // Lifecycle hooks functions
  // ---------------------------------------------------------------------------

  ngOnInit() {
    this.characterClass = new CharacterClass;
    this.characterClass.class_type = new CharacterClassType;
    this.route.params.subscribe((params) => {
      let id = params['id'];
      if (id) {
        this.subscription = this.classesService.find(id)
          .subscribe((response) => {
            this.characterClass = response;
            console.log(this.characterClass);
          });
      }
    });
  }

  isSelectedTab(index: number): boolean {
    return index === this.currentTab;
  }

  selectTab(index: number) {
    this.currentTab = index;
  }

}
