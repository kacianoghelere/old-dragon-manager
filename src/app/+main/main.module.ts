import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main/main.component';
import { AuthenticatedComponent } from './authenticated/authenticated.component';
import { FeedComponent } from './feed/feed.component';
import { MainRoutingModule } from './main-routing.module';
import { UtilModule } from '../util/util.module';

@NgModule({
  imports: [
    CommonModule,
    UtilModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent,
    AuthenticatedComponent,
    FeedComponent
  ],
  exports: [MainComponent]
})
export class MainModule { }
