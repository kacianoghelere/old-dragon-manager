import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginFormComponent } from './login-form/login-form.component';
import { LayoutModule } from '../layout/layout.module';
import { UtilModule } from '../util/util.module';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    LoginRoutingModule,
    UtilModule
  ],
  declarations: [LoginFormComponent]
})
export class LoginModule { }
