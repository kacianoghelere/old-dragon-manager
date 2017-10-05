import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MarkdownModule } from 'angular2-markdown';

import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

import { LayoutModule } from '../../layout/layout.module';
import { SharedModule } from '../../shared/shared.module';
import { UtilModule } from "../../util/util.module";
import { CampaignsRoutingModule } from './campaigns-routing.module';

import { CampaignCharactersComponent } from './campaign-profile/campaign-characters/campaign-characters.component';
import { CampaignEditorComponent } from './campaign-editor/campaign-editor.component';
import { CampaignFormCharacterComponent } from './campaign-editor/campaign-form-characters/campaign-form-character/campaign-form-character.component';
import { CampaignFormCharactersComponent } from './campaign-editor/campaign-form-characters/campaign-form-characters.component';
import { CampaignFormJournalComponent } from './campaign-editor/campaign-form-journals/campaign-form-journal/campaign-form-journal.component';
import { CampaignFormJournalsComponent } from './campaign-editor/campaign-form-journals/campaign-form-journals.component';
import { CampaignFormMapComponent } from './campaign-editor/campaign-form-maps/campaign-form-map/campaign-form-map.component';
import { CampaignFormMapsComponent } from './campaign-editor/campaign-form-maps/campaign-form-maps.component';
import { CampaignFormNoteComponent } from './campaign-editor/campaign-form-notes/campaign-form-note/campaign-form-note.component';
import { CampaignFormNotesComponent } from './campaign-editor/campaign-form-notes/campaign-form-notes.component';
import { CampaignInviteUsersComponent } from './campaign-invite-users/campaign-invite-users.component';
import { CampaignJournalsComponent } from './campaign-profile/campaign-journals/campaign-journals.component';
import { CampaignMapsComponent } from './campaign-profile/campaign-maps/campaign-maps.component';
import { CampaignNotesComponent } from './campaign-profile/campaign-notes/campaign-notes.component';
import { CampaignProfileComponent } from './campaign-profile/campaign-profile.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { CampaignsListComponent } from './campaigns-list/campaigns-list.component';
import { CampaignWikiCardComponent } from './campaign-profile/campaign-wiki/campaign-wiki-card/campaign-wiki-card.component';
import { CampaignWikiComponent } from './campaign-profile/campaign-wiki/campaign-wiki.component';
import { CampaignWikiPageComponent } from './campaign-profile/campaign-wiki/campaign-wiki-page/campaign-wiki-page.component';
import { CampaignWikiPageEditorComponent } from './campaign-profile/campaign-wiki/campaign-wiki-page-editor/campaign-wiki-page-editor.component';
import { CampaignWikiHomeComponent } from './campaign-profile/campaign-wiki/campaign-wiki-home/campaign-wiki-home.component';

import { CampaignsService } from "./shared/campaigns.service";
import { CampaignWikiService } from "./shared/campaign-wiki.service";
import { WikiCategoriesService } from "./shared/wiki-categories.service";

import { CampaignGuard } from "./shared/campaign.guard";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot(),
    ConfirmationPopoverModule.forRoot({confirmButtonType: 'danger'}),
    LayoutModule,
    CampaignsRoutingModule,
    UtilModule,
    SharedModule
  ],
  declarations: [
    CampaignCharactersComponent,
    CampaignEditorComponent,
    CampaignFormCharacterComponent,
    CampaignFormCharactersComponent,
    CampaignFormJournalComponent,
    CampaignFormJournalsComponent,
    CampaignFormNoteComponent,
    CampaignFormNotesComponent,
    CampaignFormMapComponent,
    CampaignFormMapsComponent,
    CampaignInviteUsersComponent,
    CampaignJournalsComponent,
    CampaignMapsComponent,
    CampaignNotesComponent,
    CampaignProfileComponent,
    CampaignsComponent,
    CampaignsListComponent,
    CampaignWikiCardComponent,
    CampaignWikiComponent,
    CampaignWikiPageComponent,
    CampaignWikiPageEditorComponent,
    CampaignWikiHomeComponent
  ],
  providers: [
    CampaignsService,
    CampaignWikiService,
    WikiCategoriesService,
    CampaignGuard
  ]
})
export class CampaignsModule { }
