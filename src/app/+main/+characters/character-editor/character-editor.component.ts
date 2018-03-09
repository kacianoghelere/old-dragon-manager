import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { AuthenticationService } from '@authentication/authentication.service';
import { Character, CharacterClass, CharacterRace, CharacterSpecialization } from '@shared/models';
import { CoreComponent } from '@shared/components/core/core.component';
import { CharactersService } from '../shared/characters.service';
import { RacesService } from '../shared/races.service';
import { ClassesService } from '../shared/classes.service';
import { SpecializationsService } from '../shared/specializations.service';

@Component({
  selector: 'character-editor',
  templateUrl: './character-editor.component.html',
  styleUrls: ['./character-editor.component.scss']
})
export class CharacterEditorComponent extends CoreComponent
    implements OnInit, OnDestroy {

  character: Character;
  characterForm: FormGroup;
  characterClasses: Observable<CharacterClass[]>;
  characterRaces: Observable<CharacterRace[]>;
  characterSpecializations: Observable<CharacterSpecialization[]>;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private charactersService: CharactersService,
    private classesService: ClassesService,
    private racesService: RacesService,
    private specializationsService: SpecializationsService,
    private toastrService: ToastrService
  ) {
    super();
  }

  closeEditor() {
    if (this.character.id) {
      this.router.navigate(['/main/characters', this.character.uuid]);
    } else {
      this.router.navigate(['/main/characters/']);
    }
  }

  generateName() {
    this.charactersService.generateName().subscribe((generated) => {
      this.characterForm.patchValue({
        name: `${generated.name} ${generated.surname}`
      });
    });
  }

  getActive(id: any, field: string): {active: boolean} {
    return {active: this.compareFormValues(id, field)};
  }

  compareFormValues(id: any, field: string): boolean {
    return id === this.characterForm.value[field];
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id = params['character_id'];

      this.characterRaces = this.racesService.list();

      this.characterClasses = this.classesService.list();

      this.characterSpecializations = this.specializationsService.list();

      if (id) {
        this.subscription = this.charactersService.find(id).subscribe(
          (response: Character) => {
            this.character = response;
            this.toFormGroup(this.character);
          }
        );
      } else {
        this.character = {
          id: null,
          name: '',
          flat_name: '',
          description: '',
          attributes: {
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0
          }
        };
        this.toFormGroup(this.character);
      }
    });
  }

  onSubmit({value, valid}: {value: Character, valid: boolean}) {
    console.log("Submetido!", {value});

    let params = {
      id: value.id,
      title: value.title,
      picture: value.picture,
      description: value.description,
      attributes: value.attributes
    };

    // this.charactersService.handle(params).subscribe(
    //   (response: Character) => {
    //     if (!this.character.id) {
    //       this.character.id = response.id;
    //     }
    //
    //     this.toastrService.success('Operação concluída',
    //       'Os dados da campanha foram gravados com sucesso.');
    //
    //     this.goBack();
    //   },
    //   (error) => {
    //     this.toastrService.warning('Ooops! Ocorreu um erro.',
    //       'Parace que algum kobold andou mexendo nos cabos de rede.');
    //   }
    // );
  }

  toFormGroup(character: Character) {
    let characterClassId = this.character.class ? this.character.class.id : '';

    let characterRaceId = this.character.race ? this.character.race.id : '';

    let characterSpecializationId = this.character.specialization
                                    ? this.character.specialization.id : '';

    this.characterForm = this.formBuilder.group({
      id : this.character.id,
      name: [
        this.character.name, [
          Validators.required, Validators.maxLength(45), Validators.minLength(3)
        ]
      ],
      quote: [
        this.character.quote, Validators.maxLength(300)
      ],
      weight: [
        this.character.weight, [
          Validators.required, Validators.max(200), Validators.min(20)
        ]
      ],
      height: [
        this.character.height, [
          Validators.required, Validators.max(280), Validators.min(30)
        ]
      ],
      age: [
        this.character.age, [
          Validators.required, Validators.max(700), Validators.min(10)
        ]
      ],
      picture: [
        this.character.picture, Validators.maxLength(300)
      ],
      description: [this.character.
        description,
        Validators.required
      ],
      level: [
        character.level, [
          Validators.required, Validators.max(20), Validators.min(1)
        ]
      ],
      characterClass: [
        characterClassId,
        Validators.required
      ],
      characterRace: [
        characterRaceId,
        Validators.required
      ],
      characterSpecialization: [
        characterSpecializationId,
        Validators.required
      ]
    });
  }
}
