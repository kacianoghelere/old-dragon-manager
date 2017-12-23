import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RacesRoutingModule } from './races-routing.module';
import { RacesComponent } from './races/races.component';
import { RaceDetailsComponent } from './race-details/race-details.component';
import { RacesListComponent } from './races-list/races-list.component';
import { RacesService } from './shared/races.service';
import { RaceLoreComponent } from './race-details/race-lore/race-lore.component';
import { RaceAttributesComponent } from './race-details/race-attributes/race-attributes.component';
import { RaceTraitsComponent } from './race-details/race-traits/race-traits.component';
import { RaceSkillsComponent } from './race-details/race-skills/race-skills.component';
import { LayoutModule } from '../../../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    RacesRoutingModule
  ],
  declarations: [
    RacesComponent,
    RaceDetailsComponent,
    RacesListComponent,
    RaceLoreComponent,
    RaceAttributesComponent,
    RaceTraitsComponent,
    RaceSkillsComponent
  ],
  providers: [RacesService]
})
export class RacesModule { }
