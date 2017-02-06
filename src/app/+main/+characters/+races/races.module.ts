import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RacesRoutingModule } from './races-routing.module';
import { RacesComponent } from './races/races.component';

@NgModule({
  imports: [
    CommonModule,
    RacesRoutingModule
  ],
  declarations: [RacesComponent]
})
export class RacesModule { }
