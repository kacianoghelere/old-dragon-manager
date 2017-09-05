import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { AuthenticationGuard } from '../shared/guards/authentication.guard';
import { AuthenticatedGuard } from '../shared/guards/authenticated.guard';

const usersRoutes: Routes = [
  {
    path: "users",
    component: UsersComponent,
    children: [
      {
        path: "registration",
        component: UserRegistrationComponent,
        canActivate: [AuthenticatedGuard]
      },
      {
        path: "profile/:id/settings",
        component: UserSettingsComponent,
        canActivate: [AuthenticationGuard]
      },
      {
        path: "profile/:id",
        component: UserProfileComponent,
        canActivate: [AuthenticationGuard]
      },
      {
        path: "",
        component: UserListComponent,
        canActivate: [AuthenticationGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
