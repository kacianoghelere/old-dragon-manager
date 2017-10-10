import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignWikiBlankPageComponent } from './campaign-wiki-blank-page/campaign-wiki-blank-page.component';
import { CampaignWikiComponent } from './campaign-wiki/campaign-wiki.component';
import { CampaignWikiHomeComponent } from './campaign-wiki-home/campaign-wiki-home.component';
import { CampaignWikiPageComponent } from './campaign-wiki-page/campaign-wiki-page.component';
import { CampaignWikiPageEditorComponent } from './campaign-wiki-page-editor/campaign-wiki-page-editor.component';

import { CampaignWikiGuard } from "./shared/campaign-wiki.guard";
import { CampaignWikiPageGuard } from "./shared/campaign-wiki-page.guard";

import { CampaignOwnerGuard } from "../shared/campaign-owner.guard";

const routes: Routes = [
  {
    path: '',
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignWikiRoutingModule { }
