import { Component, OnInit, Input } from '@angular/core';

import { CharacterRace } from '../../../../../shared/entities/character-race';

@Component({
  selector: 'race-traits',
  templateUrl: './race-traits.component.html',
  styleUrls: ['./race-traits.component.scss']
})
export class RaceTraitsComponent implements OnInit {

  @Input('race') characterRace: CharacterRace;

  constructor() { }

  ngOnInit() {
  }

  hasTraits(): boolean {
    return !!(this.characterRace.traits && this.characterRace.traits.length);
  }
}
