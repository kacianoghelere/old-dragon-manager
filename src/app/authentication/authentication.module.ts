import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AuthenticationGuard } from "../shared/guards/authentication.guard";
import { AuthenticatedGuard } from "../shared/guards/authenticated.guard";
import { AuthenticationService } from "./authentication.service";

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard,
    AuthenticatedGuard
  ]
})
export class AuthenticationModule { }
