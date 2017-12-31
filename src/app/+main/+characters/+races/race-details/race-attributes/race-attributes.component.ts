import { Component, OnInit, Input } from '@angular/core';

import { CharacterRace } from '../../../../../shared/models';

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
