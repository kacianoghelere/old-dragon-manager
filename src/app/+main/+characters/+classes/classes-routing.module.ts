import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassesComponent } from './classes/classes.component';

const classesRoutes: Routes = [
  {
    path: '',
    component: ClassesComponent,
    children: [
      {
        path: 'evolutions',
        loadChildren: `app/+main/+characters/+classes/+evolutions/evolutions.module#EvolutionsModule`
      },
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
