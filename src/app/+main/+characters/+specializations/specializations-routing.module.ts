import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecializationsComponent } from './specializations/specializations.component';
import { SpecializationsListComponent } from './specializations-list/specializations-list.component';

const routes: Routes = [
  {
    path: '',
    component: SpecializationsComponent,
    children: [
      {path: '', component: SpecializationsListComponent, pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SpecializationsRoutingModule { }
