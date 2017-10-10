import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignMapEditorComponent } from './campaign-map-editor/campaign-map-editor.component';
import { CampaignMapsComponent } from './campaign-maps/campaign-maps.component';
import { CampaignMapsListComponent } from './campaign-maps-list/campaign-maps-list.component';

import { CampaignOwnerGuard } from "../shared/campaign-owner.guard";

const routes: Routes = [
  {
    path: '',
    component: CampaignMapsComponent,
    children: [
      {
        path: 'new',
        component: CampaignMapEditorComponent,
        canActivate: [CampaignOwnerGuard]
      },
      {
        path: ':map_id/edit',
        component: CampaignMapEditorComponent,
        canActivate: [CampaignOwnerGuard]
      },
      { path: '', component: CampaignMapsListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignMapsRoutingModule { }
