import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignFormComponent } from './campaign-form/campaign-form.component';
import { CampaignProfileComponent } from './campaign-profile/campaign-profile.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { CampaignsListComponent } from './campaigns-list/campaigns-list.component';
import { CampaignWikiComponent } from './campaign-profile/campaign-wiki/campaign-wiki.component';
import { CampaignWikiPageComponent } from './campaign-profile/campaign-wiki/campaign-wiki-page/campaign-wiki-page.component';
import { CampaignWikiPageEditorComponent } from './campaign-profile/campaign-wiki/campaign-wiki-page-editor/campaign-wiki-page-editor.component';

const routes: Routes = [
  {
    path: '',
    component: CampaignsComponent,
    children: [
      { path: 'new', component: CampaignFormComponent },
      { path: ':campaign_id/wiki/new', component: CampaignWikiPageEditorComponent },
      { path: ':campaign_id/wiki/:page_id/edit', component: CampaignWikiPageEditorComponent },
      { path: ':campaign_id/wiki/:page_id', component: CampaignWikiPageComponent },
      { path: ':campaign_id/wiki', component: CampaignWikiComponent },
      { path: ':campaign_id/edit', component: CampaignFormComponent },
      { path: ':campaign_id', component: CampaignProfileComponent },
      { path: '', component: CampaignsListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignsRoutingModule { }
