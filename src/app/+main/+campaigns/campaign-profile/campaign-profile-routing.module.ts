import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignCharactersModule } from './campaign-characters/campaign-characters.module';
import { CampaignJournalsModule } from './campaign-journals/campaign-journals.module';
import { CampaignMapsModule } from './campaign-maps/campaign-maps.module';
import { CampaignNotesModule } from './campaign-notes/campaign-notes.module';;
import { CampaignWikiModule } from './campaign-wiki/campaign-wiki.module';

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
        loadChildren: 'app/+main/+campaigns/campaign-profile/campaign-characters/campaign-characters.module#CampaignCharactersModule',
        data: {state: 'characters'}
      },
      {
        path: 'journals',
        loadChildren: 'app/+main/+campaigns/campaign-profile/campaign-journals/campaign-journals.module#CampaignJournalsModule',
        data: {state: 'journals'}
      },
      {
        path: 'maps',
        loadChildren: 'app/+main/+campaigns/campaign-profile/campaign-maps/campaign-maps.module#CampaignMapsModule',
        data: {state: 'maps'}
      },
      {
        path: 'notes',
        loadChildren: 'app/+main/+campaigns/campaign-profile/campaign-notes/campaign-notes.module#CampaignNotesModule',
        data: {state: 'notes'}
      },
      {
        path: 'wiki',
        loadChildren: 'app/+main/+campaigns/campaign-profile/campaign-wiki/campaign-wiki.module#CampaignWikiModule',
        data: {state: 'wiki'}
      },
      { path: '', redirectTo: 'journals', pathMatch: 'full' },
      { path: '**', redirectTo: 'journals', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignProfileRoutingModule { }
