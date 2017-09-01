import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main/main.component';
import { AuthenticatedComponent } from './authenticated/authenticated.component';
import { MainRoutingModule } from './main-routing.module';
import { UtilModule } from '../util/util.module';
import { MainHomeComponent } from './main-home/main-home.component';
import { CharactersService } from "./shared/characters.service";

@NgModule({
  imports: [
    CommonModule,
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
