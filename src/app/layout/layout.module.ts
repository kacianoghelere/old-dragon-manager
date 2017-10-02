import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MarkdownModule } from 'angular2-markdown';

import { UtilModule } from '../util/util.module';
import { SharedModule } from '../shared/shared.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { LayoutNavigationComponent } from './layout-navigation/layout-navigation.component';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { LayoutBreadcrumbComponent } from './layout-breadcrumb/layout-breadcrumb.component';
import { LayoutBaseComponent } from './layout-base/layout-base.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    MarkdownModule.forRoot(),
    UtilModule,
    SharedModule
  ],
  declarations: [
    WelcomeComponent,
    LayoutNavigationComponent,
    LayoutHeaderComponent,
    LayoutBreadcrumbComponent,
    LayoutBaseComponent
  ],
  exports: [
    WelcomeComponent,
    LayoutHeaderComponent,
    LayoutBaseComponent
  ]
})
export class LayoutModule { }
