import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassesComponent } from './classes/classes.component';
import { ClassDetailsComponent } from './class-details/class-details.component';

const classesRoutes: Routes = [
  {
    path: '',
    component: ClassesComponent,
    children: [
      {path: 'details/:id', component: ClassDetailsComponent},
      {path: '', redirectTo: 'details/1', pathMatch: 'full'},
      {
        path: 'specializations',
        loadChildren: `app/+main/+characters/+classes/+specializations/specializations.module#SpecializationsModule`
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(classesRoutes)],
  exports: [RouterModule],
  providers: []
})
export class ClassesRoutingModule { }
