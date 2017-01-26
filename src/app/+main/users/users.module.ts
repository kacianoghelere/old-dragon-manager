import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UsersComponent } from './users/users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UsersService } from './users.service';
import { UtilModule } from '../../util/util.module';
import { UsersRoutingModule } from './users-routing.module';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    UtilModule,
    UsersRoutingModule
  ],
  declarations: [
    UsersComponent,
    UserListComponent,
    UserProfileComponent,
    UserSettingsComponent,
    UserListItemComponent,
    UserFormComponent
  ],
  providers: [UsersService]
})
export class UsersModule { }
