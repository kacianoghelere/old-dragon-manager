import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignBlankPageComponent } from './campaign-blank-page/campaign-blank-page.component';
import { CampaignPagesComponent } from './campaign-pages/campaign-pages.component';
import { CampaignPagesHomeComponent } from './campaign-pages-home/campaign-pages-home.component';
import { CampaignPageComponent } from './campaign-page/campaign-page.component';
import { CampaignPageEditorComponent } from './campaign-page-editor/campaign-page-editor.component';

import { CampaignPagesGuard } from "./shared/campaign-pages.guard";
import { CampaignPageGuard } from "./shared/campaign-page.guard";

import { CampaignOwnerGuard } from "../shared/campaign-owner.guard";

const routes: Routes = [
  {
    path: '',
    component: CampaignPagesComponent,
    children: [
      {
        path: 'blank',
        component: CampaignBlankPageComponent,
        canActivate: [CampaignPagesGuard]
      },
      {
        path: 'new',
        component: CampaignPageEditorComponent,
        canActivate: [CampaignPagesGuard]
      },
      {
        path: ':page_id/edit',
        component: CampaignPageEditorComponent,
        canActivate: [
          CampaignPagesGuard,
          CampaignPageGuard
        ]
      },
      {
        path: ':page_id',
        component: CampaignPageComponent,
        canActivate: [CampaignPageGuard]
      },
      { path: '', component: CampaignPagesHomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignPagesRoutingModule { }
