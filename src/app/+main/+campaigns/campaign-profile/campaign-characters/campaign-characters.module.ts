import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../../../shared/shared.module';
import { UtilModule } from "../../../../util/util.module";
import { CampaignCharactersRoutingModule } from './campaign-characters-routing.module';
import { CampaignCharactersComponent } from './campaign-characters/campaign-characters.component';
import { CampaignCharactersListComponent } from './campaign-characters-list/campaign-characters-list.component';
import { CampaignCharactersManagerComponent } from './campaign-characters-manager/campaign-characters-manager.component';
import { CampaignCharacterComponent } from './campaign-characters-manager/campaign-character/campaign-character.component';
import { CampaignInviteUsersComponent } from './campaign-invite-users/campaign-invite-users.component';
import { CampaignCharactersService } from './shared/campaign-characters.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    UtilModule,
    CampaignCharactersRoutingModule
  ],
  declarations: [
    CampaignCharacterComponent,
    CampaignCharactersComponent,
    CampaignCharactersListComponent,
    CampaignCharactersManagerComponent,
    CampaignInviteUsersComponent
  ],
  providers: [CampaignCharactersService]
})
export class CampaignCharactersModule { }
