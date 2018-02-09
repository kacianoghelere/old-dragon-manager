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

  get characterStrength(): AttributeModifier {
    return this.characterAttributes.strength;
  }

  get characterDexterity(): AttributeModifier {
    return this.characterAttributes.dexterity;
  }

  get characterConstitution(): AttributeModifier {
    return this.characterAttributes.constitution;
  }

  get characterIntelligence(): AttributeModifier {
    return this.characterAttributes.intelligence;
  }

  get characterWisdom(): AttributeModifier {
    return this.characterAttributes.wisdom;
  }

  get characterCharisma(): AttributeModifier {
    return this.characterAttributes.charisma;
  }

  ngOnDestroy() {
  }

  ngOnInit() {
  }

}
