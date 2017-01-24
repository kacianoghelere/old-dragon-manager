import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { UtilModule } from '../util/util.module';

@NgModule({
  imports: [
    CommonModule,
    UtilModule,
    MainRoutingModule
  ],
  declarations: [MainComponent],
  exports: [MainComponent]
})
export class MainModule { }
