import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main/main.component';
import { AuthenticatedComponent } from './authenticated/authenticated.component';
import { MainRoutingModule } from './main-routing.module';
import { UtilModule } from '../util/util.module';
import { MainFeedComponent } from './main-feed/main-feed.component';

@NgModule({
  imports: [
    CommonModule,
    UtilModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent,
    AuthenticatedComponent,
    MainFeedComponent
  ],
  exports: [MainComponent]
})
export class MainModule { }
