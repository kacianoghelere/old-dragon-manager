import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RacesComponent } from './races/races.component';

const routes: Routes = [
  {
    path: '',
    component: RacesComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class RacesRoutingModule { }
