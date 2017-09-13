import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main/main.component';
import { AuthenticatedComponent } from './authenticated/authenticated.component';
import { MainRoutingModule } from './main-routing.module';
import { UtilModule } from '../util/util.module';
import { MainHomeComponent } from './main-home/main-home.component';
import { CharactersService } from "./shared/characters.service";
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    UtilModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent,
    AuthenticatedComponent,
    MainHomeComponent
  ],
  exports: [MainComponent],
  providers: [CharactersService]
})
export class MainModule { }
