import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignCharactersComponent } from './campaign-profile/campaign-characters/campaign-characters.component';
import { CampaignEditorComponent } from './campaign-editor/campaign-editor.component';
import { CampaignJournalsComponent } from './campaign-profile/campaign-journals/campaign-journals.component';
import { CampaignMapsComponent } from './campaign-profile/campaign-maps/campaign-maps.component';
import { CampaignNotesComponent } from './campaign-profile/campaign-notes/campaign-notes.component';
import { CampaignProfileComponent } from './campaign-profile/campaign-profile.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { CampaignsListComponent } from './campaigns-list/campaigns-list.component';
import { CampaignWikiComponent } from './campaign-profile/campaign-wiki/campaign-wiki.component';
import { CampaignWikiHomeComponent } from './campaign-profile/campaign-wiki/campaign-wiki-home/campaign-wiki-home.component';
import { CampaignWikiBlankPageComponent } from './campaign-profile/campaign-wiki/campaign-wiki-blank-page/campaign-wiki-blank-page.component';
import { CampaignWikiPageComponent } from './campaign-profile/campaign-wiki/campaign-wiki-page/campaign-wiki-page.component';
import { CampaignWikiPageEditorComponent } from './campaign-profile/campaign-wiki/campaign-wiki-page-editor/campaign-wiki-page-editor.component';

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
          { path: 'characters', component: CampaignCharactersComponent },
          { path: 'journals', component: CampaignJournalsComponent },
          { path: 'notes', component: CampaignNotesComponent },
          { path: 'maps', component: CampaignMapsComponent },
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
