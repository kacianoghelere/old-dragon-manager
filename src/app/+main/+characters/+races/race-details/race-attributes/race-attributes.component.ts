import { Component, OnInit, Input } from '@angular/core';

import { CharacterRace } from '../../../../../shared/entities/character-race';

@Component({
  selector: 'race-attributes',
  templateUrl: './race-attributes.component.html',
  styleUrls: ['./race-attributes.component.scss']
})
export class RaceAttributesComponent implements OnInit {

  @Input('race') characterRace: CharacterRace;

  constructor() { }

  ngOnInit() {
  }

}
