import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';

const usersRoutes: Routes = [
  {
    path: "",
    component: UsersComponent,
    children: [
      {path: "", component: UserListComponent},
      {path: "profile/:id/settings", component: UserSettingsComponent},
      {path: "profile/:id", component: UserProfileComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
