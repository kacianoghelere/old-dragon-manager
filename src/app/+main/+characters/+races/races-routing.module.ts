import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RacesComponent } from './races/races.component';

const racesRoutes: Routes = [
  {
    path: '',
    component: RacesComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(racesRoutes)],
  exports: [RouterModule],
  providers: []
})
export class RacesRoutingModule { }
