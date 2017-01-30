import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main/main.component';
import { MainRoutingModule } from './main-routing.module';
import { UtilModule } from '../util/util.module';
import { AuthenticatedComponent } from './authenticated/authenticated.component';

@NgModule({
  imports: [
    CommonModule,
    UtilModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent,
    AuthenticatedComponent
  ],
  exports: [MainComponent]
})
export class MainModule { }
