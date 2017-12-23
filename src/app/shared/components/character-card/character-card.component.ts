import { Component, Input, OnInit } from '@angular/core';

import { CoreComponent } from '../../components/core/core.component';
import { Character } from '../../entities/character';

@Component({
  selector: 'character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent extends CoreComponent implements OnInit {

  @Input('character') character: Character;
  @Input('showPlayer') showPlayer: boolean = true;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
