import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AuthenticationGuard } from "./authentication.guard";
import { AuthenticationService } from "./authentication.service";

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard
  ]
})
export class AuthenticationModule { }
