import { Component, OnInit, Input } from '@angular/core';

import { CharacterRace } from '../../../../../shared/entities/character-race';

@Component({
  selector: 'race-skills',
  templateUrl: './race-skills.component.html',
  styleUrls: ['./race-skills.component.scss']
})
export class RaceSkillsComponent implements OnInit {

  @Input('race') characterRace: CharacterRace;

  constructor() { }

  ngOnInit() {
  }

  hasSkills(): boolean {
    return !!(this.characterRace.skills && this.characterRace.skills.length);
  }
}
