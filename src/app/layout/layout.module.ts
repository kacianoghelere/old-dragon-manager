import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MarkdownModule } from 'angular2-markdown';

import { UtilModule } from '../util/util.module';
import { SharedModule } from '../shared/shared.module';
import { LayoutBaseComponent } from './layout-base/layout-base.component';
import { LayoutBreadcrumbComponent } from './layout-breadcrumb/layout-breadcrumb.component';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { LayoutNavigationComponent } from './layout-navigation/layout-navigation.component';
import { LayoutNavigationItemComponent } from './layout-navigation-item/layout-navigation-item.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LayoutBaseNavigationComponent } from './layout-base-navigation/layout-base-navigation.component';

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
    LayoutBaseComponent,
    LayoutBreadcrumbComponent,
    LayoutHeaderComponent,
    LayoutNavigationComponent,
    LayoutNavigationItemComponent,
    WelcomeComponent,
    LayoutBaseNavigationComponent,
  ],
  exports: [
    LayoutBaseComponent,
    LayoutHeaderComponent,
    SharedModule,
    WelcomeComponent
  ]
})
export class LayoutModule { }
