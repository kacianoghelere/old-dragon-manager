import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UtilModule } from "../../util/util.module";
import { CampaignsRoutingModule } from './campaigns-routing.module';
import { CampaignsListComponent } from './campaigns-list/campaigns-list.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { CampaignComponent } from './campaign/campaign.component';
import { CampaignCharactersComponent } from './campaign/campaign-characters/campaign-characters.component';
import { CampaignJournalsComponent } from './campaign/campaign-journals/campaign-journals.component';
import { CampaignNotesComponent } from './campaign/campaign-notes/campaign-notes.component';
import { CampaignFormComponent } from './campaign/campaign-form/campaign-form.component';
import { CampaignFormCharactersComponent } from './campaign/campaign-form/campaign-form-characters/campaign-form-characters.component';
import { CampaignFormNoteComponent } from './campaign/campaign-form/campaign-form-notes/campaign-form-note/campaign-form-note.component';
import { CampaignFormNotesComponent } from './campaign/campaign-form/campaign-form-notes/campaign-form-notes.component';
import { CampaignFormJournalComponent } from './campaign/campaign-form/campaign-form-journals/campaign-form-journal/campaign-form-journal.component';
import { CampaignFormJournalsComponent } from './campaign/campaign-form/campaign-form-journals/campaign-form-journals.component';
import { CampaignsService } from "./shared/campaigns.service";
import { SharedModule } from '../../shared/shared.module';
import { LayoutModule } from '../../layout/layout.module';
import { CampaignInviteUsersComponent } from './campaign-invite-users/campaign-invite-users.component';
import { CampaignFormCharacterComponent } from './campaign/campaign-form/campaign-form-characters/campaign-form-character/campaign-form-character.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    CampaignsRoutingModule,
    UtilModule,
    SharedModule
  ],
  declarations: [
    CampaignsListComponent,
    CampaignsComponent,
    CampaignComponent,
    CampaignJournalsComponent,
    CampaignNotesComponent,
    CampaignCharactersComponent,
    CampaignFormComponent,
    CampaignFormJournalsComponent,
    CampaignFormNotesComponent,
    CampaignFormJournalComponent,
    CampaignFormNoteComponent,
    CampaignFormCharactersComponent,
    CampaignInviteUsersComponent,
    CampaignFormCharacterComponent
  ],
  providers: [
    CampaignsService
  ]
})
export class CampaignsModule { }
