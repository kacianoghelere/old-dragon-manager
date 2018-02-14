import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { AuthenticationService } from '../../../authentication/authentication.service';
import { Character } from '../../../shared/models';
import { CharactersService } from '../shared/characters.service';
import { CoreComponent } from '../../../shared/components/core/core.component';

@Component({
  selector: 'character-editor',
  templateUrl: './character-editor.component.html',
  styleUrls: ['./character-editor.component.scss']
})
export class CharacterEditorComponent extends CoreComponent
    implements OnInit, OnDestroy {

  character: Character;
  characterForm: FormGroup;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private charactersService: CharactersService,
    private toastrService: ToastrService
  ) {
    super();
  }

  goBack() {
    if (this.character.id) {
      this.router.navigate(['/main/characters', this.character.uuid]);
    } else {
      this.router.navigate(['/main/characters/']);
    }
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id = params['character_id'];

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
          description: ''
        };
        this.toFormGroup(this.character);
      }
    });
  }

  onSubmit({value, valid}: {value: Character, valid: boolean}) {
    console.log("Submetido!", value);
    let params = {
      id: value.id,
      title: value.title,
      picture: value.picture,
      description: value.description
    };
    this.charactersService.handle(params).subscribe(
      (response: Character) => {
        if (!this.character.id) {
          this.character.id = response.id;
        }

        this.toastrService.success('Operação concluída',
          'Os dados da campanha foram gravados com sucesso.');

        this.goBack();
      },
      (error) => {
        this.toastrService.warning('Ooops! Ocorreu um erro.',
          'Parace que algum kobold andou mexendo nos cabos de rede.');
      }
    );
  }

  toFormGroup(character: Character) {
    this.characterForm = this.formBuilder.group({
      id : this.character.id,
      name: [
        this.character.name, [
          Validators.required, Validators.maxLength(45), Validators.minLength(3)
        ]
      ],
      picture: [this.character.picture, Validators.maxLength(300)],
      description: [this.character.description, Validators.required],
      characterClass: ['', Validators.required],
      characterRace: ['', Validators.required]
    });
  }
}
