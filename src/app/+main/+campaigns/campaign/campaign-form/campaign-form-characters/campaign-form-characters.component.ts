import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';

import { Character } from '../../../../../shared/entities/character';

@Component({
  selector: 'campaign-form-characters',
  templateUrl: './campaign-form-characters.component.html',
  styleUrls: ['./campaign-form-characters.component.scss']
})
export class CampaignFormCharactersComponent implements OnInit {

  @Input('campaignForm') campaignForm: FormGroup;
  @Input('characters') characters: Character[];

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.campaignForm.addControl('characters', new FormArray([]));
  }

  /**
   * Remove personagem do FormArray
   * @param {Character} character Objeto do personagem
   */
  removeCharacter(character: Character) {
    if (this.characters.length) {
      let index = this.characters.indexOf(character);
      if (index >= 0) {
        this.characters.splice(index, 1);
        (<FormArray>this.campaignForm.get('characters')).removeAt(index);
        this.changeDetectorRef.detectChanges();
      }
    }
  }
}
