import { Component, OnInit, Input } from '@angular/core';

import { CharacterRace } from '../../../../../shared/entities/character-race';

@Component({
  selector: 'race-lore',
  templateUrl: './race-lore.component.html',
  styleUrls: ['./race-lore.component.scss']
})
export class RaceLoreComponent implements OnInit {

  @Input('race') characterRace: CharacterRace;

  constructor() { }

  ngOnInit() {
  }

}
