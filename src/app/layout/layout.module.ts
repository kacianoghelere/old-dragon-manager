import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule,
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
