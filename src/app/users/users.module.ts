import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LayoutModule } from '../layout/layout.module';
import { SharedModule } from '../shared/shared.module';
import { UtilModule } from '../util/util.module';
import { UserCampaignInvitationsComponent } from './user-profile/user-campaign-invitations/user-campaign-invitations.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users.service';
import { UsersRoutingModule } from './users-routing.module';
import { UserCharactersComponent } from './user-profile/user-characters/user-characters.component';
import { UserCampaignsComponent } from './user-profile/user-campaigns/user-campaigns.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    LayoutModule,
    SharedModule,
    UtilModule,
    UsersRoutingModule
  ],
  declarations: [
    UsersComponent,
    UserFormComponent,
    UserListComponent,
    UserCardComponent,
    UserProfileComponent,
    UserRegistrationComponent,
    UserSettingsComponent,
    UserCampaignInvitationsComponent,
    UserCharactersComponent,
    UserCampaignsComponent
  ],
  exports: [UserFormComponent],
  providers: [UsersService]
})
export class UsersModule { }
