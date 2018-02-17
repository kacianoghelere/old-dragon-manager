import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthenticationService } from '../../../../authentication/authentication.service';
import { CharacterClass, CharacterSpecialization } from '../../../../shared/models';
import { ClassesService } from '../../shared/classes.service';
import { CoreComponent } from '../../../../shared/components/core/core.component';
import { SpecializationsService } from '../../shared/specializations.service';

@Component({
  selector: 'specializations-list',
  templateUrl: './specializations-list.component.html',
  styleUrls: ['./specializations-list.component.scss']
})
export class SpecializationsListComponent extends CoreComponent
    implements OnInit, OnDestroy {

  characterClasses: CharacterClass[];
  specializations: CharacterSpecialization[] = [];
  subscription: Subscription;

  constructor(
    private authService: AuthenticationService,
    private classesService: ClassesService,
    private specializationsService: SpecializationsService
  ) {
    super();
  }

  /**
   * Filtro de especializações selecionadas
   * @return {CharacterSpecialization[]} Lista filtrada de especializações
   */
  get filteredSpecializations(): CharacterSpecialization[] {
    return this.specializations.filter((specialization) => {
      let characterClass = specialization.character_class;
      return this.isActiveTab('')
        || (characterClass && this.isActiveTab(characterClass.flat_name));
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.setActiveTab('');
    this.subscription = this.specializationsService.list()
      .subscribe((response) => this.specializations = response);

      this.classesService.list().subscribe((characterClasses) => {
        this.characterClasses = characterClasses;
      });
    }
  }
