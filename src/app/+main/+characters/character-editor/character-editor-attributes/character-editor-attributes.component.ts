import { ChangeDetectorRef, Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Character } from '@shared/models';
import { CoreComponent } from '@shared/components/core/core.component';

@Component({
  selector: 'character-editor-attributes',
  templateUrl: './character-editor-attributes.component.html',
  styleUrls: ['./character-editor-attributes.component.scss']
})
export class CharacterEditorAttributesComponent extends CoreComponent
  implements OnInit {

  @Input('character') character: Character;
  @Input('characterForm') characterForm: FormGroup;
  maxAttributeValue: number = 20;
  minAttributeValue: number = 8;
  characterAttributes: FormGroup;
  validators = [
    Validators.required,
    Validators.max(this.maxAttributeValue),
    Validators.min(this.minAttributeValue)
  ];

  constructor(
    private formBuilder: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    super();
  }

  generateAttributes() {
    let attributeNames = [
      'strength',
      'dexterity',
      'constitution',
      'intelligence',
      'wisdom',
      'charisma'
    ];

    attributeNames.forEach((attribute) => {
      let value = this.rollAttribute();

      let attributesGroup = <FormGroup> this.characterForm.controls['attributes'];

      attributesGroup.controls[attribute].setValue(value);
    })

    this.changeDetectorRef.detectChanges();
  }

  ngOnInit() {
    this.characterForm.addControl('attributes', this.toFormGroup());
  }

  toFormGroup() {
    return this.formBuilder.group({
      strength: [
        this.character.attributes.strength || this.minAttributeValue,
        this.validators
      ],
      dexterity: [
        this.character.attributes.dexterity || this.minAttributeValue,
        this.validators
      ],
      constitution: [
        this.character.attributes.constitution || this.minAttributeValue,
        this.validators
      ],
      intelligence: [
        this.character.attributes.intelligence || this.minAttributeValue,
        this.validators
      ],
      wisdom: [
        this.character.attributes.wisdom || this.minAttributeValue,
        this.validators
      ],
      charisma: [
        this.character.attributes.charisma || this.minAttributeValue,
        this.validators
      ]
    })
  }
}
