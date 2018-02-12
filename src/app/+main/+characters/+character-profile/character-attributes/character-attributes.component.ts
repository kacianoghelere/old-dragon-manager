import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { CoreComponent } from '../../../../shared/components/core/core.component';
import { AttributeModifier, Character, CharacterAttribute } from '../../../../shared/models';

@Component({
  selector: 'character-attributes',
  templateUrl: './character-attributes.component.html',
  styleUrls: ['./character-attributes.component.scss']
})
export class CharacterAttributesComponent extends CoreComponent
    implements OnInit, OnDestroy {

  @Input('character') character: Character;

  constructor() {
    super();
  }

  get characterAttributes(): CharacterAttribute {
    return this.character.attributes;
  }

  get characterStrength(): number {
    return this.characterAttributes.strength;
  }

  get characterDexterity(): number {
    return this.characterAttributes.dexterity;
  }

  get characterConstitution(): number {
    return this.characterAttributes.constitution;
  }

  get characterIntelligence(): number {
    return this.characterAttributes.intelligence;
  }

  get characterWisdom(): number {
    return this.characterAttributes.wisdom;
  }

  get characterCharisma(): number {
    return this.characterAttributes.charisma;
  }

  ngOnDestroy() {
  }

  ngOnInit() {
  }

}
