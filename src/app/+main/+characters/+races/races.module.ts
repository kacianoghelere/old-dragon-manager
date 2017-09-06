import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RacesRoutingModule } from './races-routing.module';
import { RacesComponent } from './races/races.component';
import { RaceDetailsComponent } from './race-details/race-details.component';
import { RacesListComponent } from './races-list/races-list.component';
import { RacesService } from './shared/races.service';
import { RaceLoreComponent } from './race-details/race-lore/race-lore.component';
import { RaceAttributesComponent } from './race-details/race-attributes/race-attributes.component';

@NgModule({
  imports: [
    CommonModule,
    RacesRoutingModule
  ],
  declarations: [
    RacesComponent,
    RaceDetailsComponent,
    RacesListComponent,
    RaceLoreComponent,
    RaceAttributesComponent
  ],
  providers: [RacesService]
})
export class RacesModule { }
