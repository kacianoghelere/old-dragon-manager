import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecializationsRoutingModule } from './specializations-routing.module';
import { SpecializationsComponent } from './specializations/specializations.component';
import { LayoutModule } from '../../../layout/layout.module';
import { SpecializationsListComponent } from './specializations-list/specializations-list.component';

import { SpecializationsService } from './shared/specializations.service';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    SpecializationsRoutingModule
  ],
  declarations: [
    SpecializationsComponent,
    SpecializationsListComponent
  ],
  providers: [ SpecializationsService ]
})
export class SpecializationsModule { }
