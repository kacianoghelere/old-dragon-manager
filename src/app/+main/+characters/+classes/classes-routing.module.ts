import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassesComponent } from './classes/classes.component';
import { ClassDetailsComponent } from './class-details/class-details.component';
import { ClassesListComponent } from './classes-list/classes-list.component';

const classesRoutes: Routes = [
  {
    path: '',
    component: ClassesComponent,
    children: [
      {path: '', component: ClassesListComponent, pathMatch: 'full'},
      {path: ':id', component: ClassDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(classesRoutes)],
  exports: [RouterModule],
  providers: []
})
export class ClassesRoutingModule { }
