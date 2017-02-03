import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvolutionsRoutingModule } from './evolutions-routing.module';
import { EvolutionsComponent } from './evolutions/evolutions.component';

@NgModule({
  imports: [
    CommonModule,
    EvolutionsRoutingModule
  ],
  declarations: [EvolutionsComponent]
})
export class EvolutionsModule { }
