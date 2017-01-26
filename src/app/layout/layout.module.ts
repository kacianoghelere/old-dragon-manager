import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UtilModule } from '../util/util.module';

@NgModule({
  imports: [
    CommonModule,
    UtilModule,
    RouterModule
  ],
  declarations: [
    WelcomeComponent,
    NavigationComponent
  ],
  exports: [
    WelcomeComponent,
    NavigationComponent
  ]
})
export class LayoutModule { }
