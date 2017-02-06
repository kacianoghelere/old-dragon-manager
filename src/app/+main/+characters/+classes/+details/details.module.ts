import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsComponent } from './details/details.component';
import { DetailsRoutingModule } from './details-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DetailsRoutingModule
  ],
  declarations: [DetailsComponent]
})
export class DetailsModule { }
