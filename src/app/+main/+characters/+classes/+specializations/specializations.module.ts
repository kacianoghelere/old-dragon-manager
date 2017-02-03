import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecializationsRoutingModule } from './specializations-routing.module';
import {
  SpecializationsComponent
} from './specializations/specializations.component';

@NgModule({
  imports: [
    CommonModule,
    SpecializationsRoutingModule
  ],
  declarations: [SpecializationsComponent]
})
export class SpecializationsModule { }
