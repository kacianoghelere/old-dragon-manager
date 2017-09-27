import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignsComponent } from './campaigns/campaigns.component';
import { CampaignsListComponent } from './campaigns-list/campaigns-list.component';
import { CampaignProfileComponent } from './campaign-profile/campaign-profile.component';
import { CampaignFormComponent } from './campaign-form/campaign-form.component';

const routes: Routes = [
  {
    path: '',
    component: CampaignsComponent,
    children: [
      { path: ':id/edit', component: CampaignFormComponent },
      { path: 'new', component: CampaignFormComponent },
      { path: ':id', component: CampaignProfileComponent },
      { path: '', component: CampaignsListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignsRoutingModule { }
