import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginFormComponent } from './login-form/login-form.component';
import { AuthenticatedGuard } from '../shared/guards/authenticated.guard';

const loginRoutes: Routes = [
  {path: "", component: LoginFormComponent, canActivate: [AuthenticatedGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
