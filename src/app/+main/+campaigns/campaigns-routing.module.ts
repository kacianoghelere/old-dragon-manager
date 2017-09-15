import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignsComponent } from './campaigns/campaigns.component';
import { CampaignsListComponent } from './campaigns-list/campaigns-list.component';
import { CampaignComponent } from './campaign/campaign.component';
import { CampaignFormComponent } from './campaign/campaign-form/campaign-form.component';

const routes: Routes = [
  {
    path: '',
    component: CampaignsComponent,
    children: [
      { path: ':id/edit', component: CampaignFormComponent },
      { path: 'new', component: CampaignFormComponent },
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
