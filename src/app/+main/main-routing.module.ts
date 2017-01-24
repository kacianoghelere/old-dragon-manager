import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { AuthenticationGuard } from '../authentication/authentication.guard';

const mainRoutes: Routes = [
  {path: '', component: MainComponent},
  {
    path: 'users',
    canActivate: [AuthenticationGuard],
    loadChildren: 'app/+main/+users/users.module#UsersModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
