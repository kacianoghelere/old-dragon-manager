import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignEditorComponent } from './campaign-editor/campaign-editor.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { CampaignsListComponent } from './campaigns-list/campaigns-list.component';

import { CampaignOwnerGuard } from './shared/campaign-owner.guard';
import { CampaignGuard } from './shared/campaign.guard';

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
        loadChildren: 'app/+main/+campaigns/+campaign-profile/campaign-profile.module#CampaignProfileModule',
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
