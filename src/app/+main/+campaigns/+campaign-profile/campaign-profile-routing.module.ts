import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignProfileComponent } from './campaign-profile/campaign-profile.component';

import { CampaignOwnerGuard } from "../shared/campaign-owner.guard";
import { CampaignGuard } from "../shared/campaign.guard";

const routes: Routes = [
  {
    path: '',
    component: CampaignProfileComponent,
    children: [
      {
        path: 'characters',
        loadChildren: 'app/+main/+campaigns/+campaign-profile/campaign-characters/campaign-characters.module#CampaignCharactersModule',
        data: {state: 'characters'}
      },
      {
        path: 'pages',
        loadChildren: 'app/+main/+campaigns/+campaign-profile/campaign-pages/campaign-pages.module#CampaignPagesModule',
        data: {state: 'pages'}
      },
      { path: '', redirectTo: 'pages', pathMatch: 'full' },
      { path: '**', redirectTo: 'pages', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignProfileRoutingModule { }
