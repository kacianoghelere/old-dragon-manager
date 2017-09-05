import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ApiService } from './api.service';
import { ToasterService } from './toaster.service';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { TrailService }  from "./services/trail.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    BreadcrumbComponent
  ],
  exports: [
    BreadcrumbComponent
  ],
  providers: [
    ApiService,
    TrailService
  ]
})
export class SharedModule { }
