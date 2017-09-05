import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UtilModule } from '../util/util.module';
import { SharedModule } from '../shared/shared.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { LayoutBreadcrumbComponent } from './layout-breadcrumb/layout-breadcrumb.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    UtilModule,
    SharedModule
  ],
  declarations: [
    WelcomeComponent,
    NavigationComponent,
    HeaderComponent,
    LayoutBreadcrumbComponent
  ],
  exports: [
    WelcomeComponent,
    HeaderComponent
  ]
})
export class LayoutModule { }
