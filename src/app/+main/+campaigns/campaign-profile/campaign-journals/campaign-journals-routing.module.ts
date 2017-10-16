import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignJournalEditorComponent } from './campaign-journal-editor/campaign-journal-editor.component';
import { CampaignJournalsComponent } from './campaign-journals/campaign-journals.component';
import { CampaignJournalsListComponent } from './campaign-journals-list/campaign-journals-list.component';

import { CampaignOwnerGuard } from '../shared/campaign-owner.guard';

const routes: Routes = [
  {
    path: '',
    component: CampaignJournalsComponent,
    children: [
      {
        path: 'new',
        component: CampaignJournalEditorComponent,
        canActivate: [CampaignOwnerGuard]
      },
      {
        path: ':journal_id/edit',
        component: CampaignJournalEditorComponent,
        canActivate: [CampaignOwnerGuard]
      },
      { path: '', component: CampaignJournalsListComponent, pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignJournalsRoutingModule { }
