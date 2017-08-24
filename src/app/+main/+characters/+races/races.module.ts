import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';
import { RacesRoutingModule } from './races-routing.module';
import { RacesComponent } from './races/races.component';
import { RaceDetailsComponent } from './race-details/race-details.component';
import { RacesService } from './races.service';
import { RacesListComponent } from './races-list/races-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
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
