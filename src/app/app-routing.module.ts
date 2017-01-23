import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { AuthenticationGuard } from './authentication/authentication.guard';

const appRoutes: Routes = [
  {path: "", component: WelcomeComponent},
  {
    path: 'login',
    loadChildren: 'app/+login/login.module#LoginModule'
  },
  {
    path: 'main',
    canActivate: [AuthenticationGuard],
    loadChildren: 'app/+main/main.module#MainModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  declarations: [],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
