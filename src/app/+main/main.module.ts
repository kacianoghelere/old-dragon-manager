import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { UsersModule } from './users/users.module';
import { UtilModule } from '../util/util.module';
import { AuthenticatedComponent } from './authenticated/authenticated.component';

@NgModule({
  imports: [
    CommonModule,
    UtilModule,
    UsersModule,
    MainRoutingModule
  ],
  declarations: [MainComponent, AuthenticatedComponent],
  exports: [MainComponent]
})
export class MainModule { }
