import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MarkdownModule } from 'angular2-markdown';

import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

import { LayoutModule } from '../../layout/layout.module';
import { SharedModule } from '../../shared/shared.module';
import { UtilModule } from "../../util/util.module";
import { CampaignsRoutingModule } from './campaigns-routing.module';

import { CampaignCharacterComponent }  from './campaign-profile/campaign-characters/campaign-characters-manager/campaign-character/campaign-character.component';
import { CampaignCharactersComponent } from './campaign-profile/campaign-characters/campaign-characters.component';
import { CampaignCharactersListComponent } from './campaign-profile/campaign-characters/campaign-characters-list/campaign-characters-list.component';
import { CampaignCharactersManagerComponent } from './campaign-profile/campaign-characters/campaign-characters-manager/campaign-characters-manager.component';
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
import { CampaignJournalEditorComponent } from './campaign-profile/campaign-journals/campaign-journal-editor/campaign-journal-editor.component';
import { CampaignJournalsComponent } from './campaign-profile/campaign-journals/campaign-journals.component';
import { CampaignJournalsListComponent } from './campaign-profile/campaign-journals/campaign-journals-list/campaign-journals-list.component';
import { CampaignMapEditorComponent } from './campaign-profile/campaign-maps/campaign-map-editor/campaign-map-editor.component';
import { CampaignMapsComponent } from './campaign-profile/campaign-maps/campaign-maps.component';
import { CampaignMapsListComponent } from './campaign-profile/campaign-maps/campaign-maps-list/campaign-maps-list.component';
import { CampaignNoteEditorComponent } from './campaign-profile/campaign-notes/campaign-note-editor/campaign-note-editor.component';
import { CampaignNotesComponent } from './campaign-profile/campaign-notes/campaign-notes.component';
import { CampaignNotesListComponent } from './campaign-profile/campaign-notes/campaign-notes-list/campaign-notes-list.component';
import { CampaignProfileComponent } from './campaign-profile/campaign-profile.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { CampaignsListComponent } from './campaigns-list/campaigns-list.component';
import { CampaignWikiBlankPageComponent } from './campaign-profile/campaign-wiki/campaign-wiki-blank-page/campaign-wiki-blank-page.component';
import { CampaignWikiCardComponent } from './campaign-profile/campaign-wiki/campaign-wiki-card/campaign-wiki-card.component';
import { CampaignWikiComponent } from './campaign-profile/campaign-wiki/campaign-wiki.component';
import { CampaignWikiHomeComponent } from './campaign-profile/campaign-wiki/campaign-wiki-home/campaign-wiki-home.component';
import { CampaignWikiPageComponent } from './campaign-profile/campaign-wiki/campaign-wiki-page/campaign-wiki-page.component';
import { CampaignWikiPageEditorComponent } from './campaign-profile/campaign-wiki/campaign-wiki-page-editor/campaign-wiki-page-editor.component';

import { CampaignsService } from "./shared/campaigns.service";
import { CampaignCharactersService } from "./shared/campaign-characters.service";
import { CampaignJournalsService } from "./shared/campaign-journals.service";
import { CampaignMapsService } from "./shared/campaign-maps.service";
import { CampaignNotesService } from "./shared/campaign-notes.service";
import { CampaignWikiService } from "./shared/campaign-wiki.service";
import { WikiCategoriesService } from "./shared/wiki-categories.service";

import { CampaignGuard } from "./shared/campaign.guard";
import { CampaignDungeonMasterGuard } from "./shared/campaign-dungeon-master.guard";
import { CampaignWikiGuard } from "./shared/campaign-wiki.guard";
import { CampaignWikiPageGuard } from "./shared/campaign-wiki-page.guard";

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
    CampaignCharacterComponent,
    CampaignCharactersComponent,
    CampaignCharactersListComponent,
    CampaignCharactersManagerComponent,
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
    CampaignJournalEditorComponent,
    CampaignJournalsComponent,
    CampaignJournalsListComponent,
    CampaignMapEditorComponent,
    CampaignMapsComponent,
    CampaignMapsListComponent,
    CampaignNoteEditorComponent,
    CampaignNotesComponent,
    CampaignNotesListComponent,
    CampaignProfileComponent,
    CampaignsComponent,
    CampaignsListComponent,
    CampaignWikiCardComponent,
    CampaignWikiComponent,
    CampaignWikiPageComponent,
    CampaignWikiPageEditorComponent,
    CampaignWikiHomeComponent,
    CampaignWikiBlankPageComponent
  ],
  providers: [
    CampaignsService,
    CampaignCharactersService,
    CampaignJournalsService,
    CampaignMapsService,
    CampaignNotesService,
    CampaignWikiService,
    WikiCategoriesService,
    CampaignGuard,
    CampaignDungeonMasterGuard,
    CampaignWikiGuard,
    CampaignWikiPageGuard
  ]
})
export class CampaignsModule { }
