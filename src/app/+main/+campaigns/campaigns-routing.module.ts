import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignCharactersComponent } from './campaign-profile/campaign-characters/campaign-characters.component';
import { CampaignCharactersListComponent } from './campaign-profile/campaign-characters/campaign-characters-list/campaign-characters-list.component';
import { CampaignCharactersManagerComponent } from './campaign-profile/campaign-characters/campaign-characters-manager/campaign-characters-manager.component';
import { CampaignEditorComponent } from './campaign-editor/campaign-editor.component';
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
import { CampaignWikiComponent } from './campaign-profile/campaign-wiki/campaign-wiki.component';
import { CampaignWikiHomeComponent } from './campaign-profile/campaign-wiki/campaign-wiki-home/campaign-wiki-home.component';
import { CampaignWikiPageComponent } from './campaign-profile/campaign-wiki/campaign-wiki-page/campaign-wiki-page.component';
import { CampaignWikiPageEditorComponent } from './campaign-profile/campaign-wiki/campaign-wiki-page-editor/campaign-wiki-page-editor.component';

import { CampaignDungeonMasterGuard } from "./shared/campaign-dungeon-master.guard";
import { CampaignGuard } from "./shared/campaign.guard";
import { CampaignWikiGuard } from "./shared/campaign-wiki.guard";
import { CampaignWikiPageGuard } from "./shared/campaign-wiki-page.guard";

const routes: Routes = [
  {
    path: '',
    component: CampaignsComponent,
    children: [
      { path: 'new', component: CampaignEditorComponent },
      {
        path: ':campaign_id/edit',
        component: CampaignEditorComponent,
        canActivate: [CampaignGuard]
      },
      {
        path: ':campaign_id',
        component: CampaignProfileComponent,
        children: [
          {
            path: 'characters',
            component: CampaignCharactersComponent,
            children: [
              {
                path: 'manage',
                component: CampaignCharactersManagerComponent,
                canActivate: [CampaignDungeonMasterGuard]
              },
              { path: '', component: CampaignCharactersListComponent }
            ]
          },
          {
            path: 'journals',
            component: CampaignJournalsComponent,
            children: [
              {
                path: 'new',
                component: CampaignJournalEditorComponent,
                canActivate: [CampaignDungeonMasterGuard]
              },
              {
                path: ':journal_id/edit',
                component: CampaignJournalEditorComponent,
                canActivate: [CampaignDungeonMasterGuard]
              },
              { path: '', component: CampaignJournalsListComponent }
            ]
          },
          {
            path: 'notes',
            component: CampaignNotesComponent,
            children: [
              {
                path: 'new',
                component: CampaignNoteEditorComponent,
                canActivate: [CampaignDungeonMasterGuard]
              },
              {
                path: ':note_id/edit',
                component: CampaignNoteEditorComponent,
                canActivate: [CampaignDungeonMasterGuard]
              },
              { path: '', component: CampaignNotesListComponent }
            ]
          },
          {
            path: 'maps',
            component: CampaignMapsComponent,
            children: [
              {
                path: 'new',
                component: CampaignMapEditorComponent,
                canActivate: [CampaignDungeonMasterGuard]
              },
              {
                path: ':map_id/edit',
                component: CampaignMapEditorComponent,
                canActivate: [CampaignDungeonMasterGuard]
              },
              { path: '', component: CampaignMapsListComponent }
            ]
          },
          {
            path: 'wiki',
            component: CampaignWikiComponent,
            children: [
              {
                path: 'blank',
                component: CampaignWikiBlankPageComponent,
                canActivate: [CampaignWikiGuard]
              },
              {
                path: 'new',
                component: CampaignWikiPageEditorComponent,
                canActivate: [CampaignWikiGuard]
              },
              {
                path: ':page_id/edit',
                component: CampaignWikiPageEditorComponent,
                canActivate: [
                  CampaignWikiGuard,
                  CampaignWikiPageGuard
                ]
              },
              {
                path: ':page_id',
                component: CampaignWikiPageComponent,
                canActivate: [
                  CampaignWikiPageGuard
                ]
              },
              { path: '', component: CampaignWikiHomeComponent }
            ]
          },
          { path: '', redirectTo: 'journals' }
        ]
      },
      { path: '', component: CampaignsListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignsRoutingModule { }
