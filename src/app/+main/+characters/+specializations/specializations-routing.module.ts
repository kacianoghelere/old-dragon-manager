import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecializationsComponent } from './specializations/specializations.component';
import { SpecializationsListComponent } from './specializations-list/specializations-list.component';
import { SpecializationProfileComponent } from './specialization-profile/specialization-profile.component';
import { SpecializationEditorComponent } from './specialization-editor/specialization-editor.component';

const routes: Routes = [
  {
    path: '',
    component: SpecializationsComponent,
    children: [
      {path: '', component: SpecializationsListComponent, pathMatch: 'full'},
      {path: 'new', component: SpecializationEditorComponent},
      {path: ':id', component: SpecializationProfileComponent},
      {path: ':id/edit', component: SpecializationEditorComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SpecializationsRoutingModule { }
