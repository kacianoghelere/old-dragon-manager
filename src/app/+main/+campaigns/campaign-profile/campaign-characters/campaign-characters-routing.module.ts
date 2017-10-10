import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignCharactersComponent } from './campaign-characters/campaign-characters.component';
import { CampaignCharactersListComponent } from './campaign-characters-list/campaign-characters-list.component';
import { CampaignCharactersManagerComponent } from './campaign-characters-manager/campaign-characters-manager.component';

import { CampaignOwnerGuard } from '../shared/campaign-owner.guard';

const routes: Routes = [
  {
    path: '',
    component: CampaignCharactersComponent,
    children: [
      {
        path: 'manage',
        component: CampaignCharactersManagerComponent,
        canActivate: [CampaignOwnerGuard]
      },
      { path: '', component: CampaignCharactersListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignCharactersRoutingModule { }
