import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SpecializationsRoutingModule } from './specializations-routing.module';
import { SpecializationsComponent } from './specializations/specializations.component';
import { LayoutModule } from '../../../layout/layout.module';

import { SpecializationEditorComponent } from './specialization-editor/specialization-editor.component';
import { SpecializationFormStagesComponent } from './specialization-editor/specialization-form-stages/specialization-form-stages.component';
import { SpecializationFormStageComponent } from './specialization-editor/specialization-form-stages/specialization-form-stage/specialization-form-stage.component';
import { SpecializationsListComponent } from './specializations-list/specializations-list.component';
import { SpecializationProfileComponent } from './specialization-profile/specialization-profile.component';
import { SpecializationStagesComponent } from './specialization-profile/specialization-stages/specialization-stages.component';

import { SpecializationsService } from './shared/specializations.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    SpecializationsRoutingModule
  ],
  declarations: [
    SpecializationsComponent,
    SpecializationsListComponent,
    SpecializationProfileComponent,
    SpecializationStagesComponent,
    SpecializationEditorComponent,
    SpecializationFormStagesComponent,
    SpecializationFormStageComponent
  ],
  providers: [ SpecializationsService ]
})
export class SpecializationsModule { }
