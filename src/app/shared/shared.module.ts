import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from './api.service';
import { ToasterService } from './toaster.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ApiService,
    ToasterService
  ]
})
export class SharedModule { }
