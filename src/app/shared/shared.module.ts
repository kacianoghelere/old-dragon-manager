import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ApiService } from './api.service';
import { ToasterService } from './toaster.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    ApiService
  ]
})
export class SharedModule { }
