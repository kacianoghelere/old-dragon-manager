import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RacesComponent } from './races/races.component';
import { RaceDetailsComponent } from './race-details/race-details.component';
import { RacesListComponent } from './races-list/races-list.component';

const racesRoutes: Routes = [
  {
    path: '',
    component: RacesComponent,
    children: [
      {path: '', component: RacesListComponent},
      {path: 'details/:id', component: RaceDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(racesRoutes)],
  exports: [RouterModule],
  providers: []
})
export class RacesRoutingModule { }
