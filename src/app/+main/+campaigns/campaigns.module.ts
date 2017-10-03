import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MarkdownModule } from 'angular2-markdown';

import { UtilModule } from "../../util/util.module";
import { CampaignsRoutingModule } from './campaigns-routing.module';
import { CampaignsListComponent } from './campaigns-list/campaigns-list.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { CampaignProfileComponent } from './campaign-profile/campaign-profile.component';
import { CampaignCharactersComponent } from './campaign-profile/campaign-characters/campaign-characters.component';
import { CampaignJournalsComponent } from './campaign-profile/campaign-journals/campaign-journals.component';
import { CampaignNotesComponent } from './campaign-profile/campaign-notes/campaign-notes.component';
import { CampaignFormComponent } from './campaign-form/campaign-form.component';
import { CampaignFormCharacterComponent } from './campaign-form/campaign-form-characters/campaign-form-character/campaign-form-character.component';
import { CampaignFormCharactersComponent } from './campaign-form/campaign-form-characters/campaign-form-characters.component';
import { CampaignFormNoteComponent } from './campaign-form/campaign-form-notes/campaign-form-note/campaign-form-note.component';
import { CampaignFormNotesComponent } from './campaign-form/campaign-form-notes/campaign-form-notes.component';
import { CampaignFormJournalComponent } from './campaign-form/campaign-form-journals/campaign-form-journal/campaign-form-journal.component';
import { CampaignFormJournalsComponent } from './campaign-form/campaign-form-journals/campaign-form-journals.component';
import { CampaignsService } from "./shared/campaigns.service";
import { CampaignWikiService } from "./shared/campaign-wiki.service";
import { SharedModule } from '../../shared/shared.module';
import { LayoutModule } from '../../layout/layout.module';
import { CampaignInviteUsersComponent } from './campaign-invite-users/campaign-invite-users.component';
import { CampaignWikiComponent } from './campaign-profile/campaign-wiki/campaign-wiki.component';
import { CampaignWikiPageEditorComponent } from './campaign-profile/campaign-wiki/campaign-wiki-page-editor/campaign-wiki-page-editor.component';
import { CampaignWikiPageComponent } from './campaign-profile/campaign-wiki/campaign-wiki-page/campaign-wiki-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot(),
    LayoutModule,
    CampaignsRoutingModule,
    UtilModule,
    SharedModule
  ],
  declarations: [
    CampaignsListComponent,
    CampaignsComponent,
    CampaignProfileComponent,
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
    CampaignFormCharacterComponent,
    CampaignWikiComponent,
    CampaignWikiPageEditorComponent,
    CampaignWikiPageComponent
  ],
  providers: [
    CampaignsService,
    CampaignWikiService
  ]
})
export class CampaignsModule { }
