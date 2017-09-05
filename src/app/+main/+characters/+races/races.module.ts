import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RacesRoutingModule } from './races-routing.module';
import { RacesComponent } from './races/races.component';
import { RaceDetailsComponent } from './race-details/race-details.component';
import { RacesListComponent } from './races-list/races-list.component';
import { RacesService } from './shared/races.service';

@NgModule({
  imports: [
    CommonModule,
    RacesRoutingModule
  ],
  declarations: [
    RacesComponent,
    RaceDetailsComponent,
    RacesListComponent
  ],
  providers: [RacesService]
})
export class RacesModule { }
