
import { ChangeDetectorRef, Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';

import { CharacterSpecialization, CharacterSpecializationStage } from '@shared/models';

@Component({
  selector: 'specialization-form-stages',
  templateUrl: './specialization-form-stages.component.html',
  styleUrls: ['./specialization-form-stages.component.scss']
})
export class SpecializationFormStagesComponent implements OnInit {

  @Input('specializationForm') specializationForm: FormGroup;
  @Input('stages') stages: CharacterSpecializationStage[];

  constructor(
    private formBuilder: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.specializationForm.addControl('stages', new FormArray([], Validators.minLength(1)));
  }

  /**
   * Adds a new stage in the campaign
   */
  addStage() {
    const stage: CharacterSpecializationStage = {
      _destroy: false,
      description: '',
      unlock_level: 1
    };
    this.stages.push(stage);
    this.changeDetectorRef.detectChanges();
  }
}
