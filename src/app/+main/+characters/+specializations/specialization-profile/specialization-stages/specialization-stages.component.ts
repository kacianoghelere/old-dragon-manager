import { Component, Input, OnInit } from '@angular/core';

import { CharacterSpecialization } from '../../../../../shared/models';

@Component({
  selector: 'specialization-stages',
  templateUrl: './specialization-stages.component.html',
  styleUrls: ['./specialization-stages.component.scss']
})
export class SpecializationStagesComponent implements OnInit {

  @Input('specialization') specialization: CharacterSpecialization;

  constructor() { }

  ngOnInit() {
  }

}
