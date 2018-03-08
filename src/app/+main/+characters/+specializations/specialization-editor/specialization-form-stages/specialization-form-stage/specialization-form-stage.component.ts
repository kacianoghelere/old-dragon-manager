import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';

import { CharacterSpecialization, CharacterSpecializationStage } from '../../../../../../shared/models';

@Component({
  selector: 'specialization-form-stage',
  templateUrl: './specialization-form-stage.component.html',
  styleUrls: ['./specialization-form-stage.component.scss']
})
export class SpecializationFormStageComponent implements OnInit {

  @Input('stage') stage: CharacterSpecializationStage;
  @Input('stageIndex') stageIndex: number;
  @Input('stages') stages: FormArray;
  @Output('removeStage') removeStage: EventEmitter<CharacterSpecializationStage>;
  private stageForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.removeStage = new EventEmitter();
  }

  ngOnInit() {
    this.stages.push(this.stageForm = this.toFormGroup(this.stage));
  }

  remove() {
    this.stage._destroy = true;
    this.stageForm.controls._destroy.setValue(this.stage._destroy);
  }

  toFormGroup(stage: CharacterSpecializationStage): FormGroup {
    return this.formBuilder.group({
      id: stage.id || null,
      description: [ stage.description || '', Validators.required ],
      unlock_level: [ stage.unlock_level || 1, Validators.required ],
      _destroy: stage._destroy || false
    });
  }
}
