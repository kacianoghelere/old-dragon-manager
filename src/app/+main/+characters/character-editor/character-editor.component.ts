import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { AuthenticationService } from '../../../authentication/authentication.service';
import { Character } from '../../../shared/models';
import { CharactersService } from '../shared/characters.service';

@Component({
  selector: 'character-editor',
  templateUrl: './character-editor.component.html',
  styleUrls: ['./character-editor.component.scss']
})
export class CharacterEditorComponent implements OnInit, OnDestroy {

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
  ) { }

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
        this.subscription = this.charactersService.find(id)
          .subscribe((response) => this.toFormGroup(this.character));
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

  toFormGroup(character: Character) {
    this.characterForm = this.formBuilder.group({
      id : this.character.id,
      name: [
        this.character.name, [
          Validators.required, Validators.maxLength(45), Validators.minLength(6)
        ]
      ],
      picture: [this.character.picture, Validators.maxLength(300)],
      description: [this.character.description, Validators.required]
    });
  }

}
