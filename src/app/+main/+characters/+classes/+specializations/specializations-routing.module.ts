import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  SpecializationsComponent
} from './specializations/specializations.component';

const routes: Routes = [
  {path: '', component: SpecializationsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SpecializationsRoutingModule { }
