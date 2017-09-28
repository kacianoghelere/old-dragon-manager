import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { CoreComponent } from '../../../../shared/components/core/core.component';
import { Character } from '../../../../shared/entities/character';

@Component({
  selector: 'character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss']
})
export class CharacterInfoComponent extends CoreComponent
    implements OnInit, OnDestroy {

  @Input('character') character: Character;

  constructor() {
    super();
  }

  ngOnDestroy() {
  }

  ngOnInit() {
  }

}
