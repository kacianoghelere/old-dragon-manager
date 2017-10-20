import { Component, Input, OnInit } from '@angular/core';

import { CharacterSpecialization } from '../../entities/character-specialization';

@Component({
  selector: 'specialization-card',
  templateUrl: './specialization-card.component.html',
  styleUrls: ['./specialization-card.component.scss']
})
export class SpecializationCardComponent implements OnInit {

  @Input('specialization') specialization: CharacterSpecialization;

  constructor() { }

  ngOnInit() {
  }

}
