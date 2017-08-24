import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastyModule } from 'ng2-toasty';

import { ApiService } from './api.service';
import { ToasterService } from './toaster.service';

@NgModule({
  imports: [
    CommonModule,
    ToastyModule.forRoot()
  ],
  providers: [
    ApiService,
    ToasterService
  ]
})
export class SharedModule { }
