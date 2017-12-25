import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainBaseComponent } from './main-base/main-base.component';
import { AuthenticatedComponent } from './authenticated/authenticated.component';
import { MainRoutingModule } from './main-routing.module';
import { UtilModule } from '../util/util.module';
import { MainHomeComponent } from './main-home/main-home.component';
import { CharactersService } from "./shared/characters.service";
import { LayoutModule } from '../layout/layout.module';
import { MainFeedComponent } from './main-feed/main-feed.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    UtilModule,
    MainRoutingModule
  ],
  declarations: [
    MainBaseComponent,
    AuthenticatedComponent,
    MainHomeComponent,
    MainFeedComponent
  ],
  exports: [
    MainBaseComponent
  ],
  providers: [
    CharactersService
  ]
})
export class MainModule { }
