import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { CoreComponent } from '../../../../shared/components/core/core.component';
import { Character } from '../../../../shared/entities/character';

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

  getModifier(attribute: number): string {
    let modifier = (attribute - 10) / 2;
    let signal = modifier !== 0 ? (modifier > 0 ? '+' : '-') : '';
    let absModifier = Math.abs(modifier).toFixed(0);
    return `${signal}${absModifier}`;
  }

  ngOnDestroy() {
  }

  ngOnInit() {
  }

}
