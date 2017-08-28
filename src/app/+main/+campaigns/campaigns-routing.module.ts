import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignsComponent } from './campaigns/campaigns.component';
import { CampaignsListComponent } from './campaigns-list/campaigns-list.component';
import { CampaignComponent } from './campaign/campaign.component';
import { CampaignJournalsComponent } from './campaign/campaign-journals/campaign-journals.component';
import { CampaignNotesComponent } from './campaign/campaign-notes/campaign-notes.component';
import { CampaignCharactersComponent } from './campaign/campaign-characters/campaign-characters.component';

const routes: Routes = [
  {
    path: '',
    component: CampaignsComponent,
    children: [
      { path: ':id', component: CampaignComponent },
      { path: '', component: CampaignsListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignsRoutingModule { }
