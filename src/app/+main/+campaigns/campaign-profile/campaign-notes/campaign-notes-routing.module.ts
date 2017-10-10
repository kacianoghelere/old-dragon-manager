import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignNoteEditorComponent } from './campaign-note-editor/campaign-note-editor.component';
import { CampaignNotesComponent } from './campaign-notes/campaign-notes.component';
import { CampaignNotesListComponent } from './campaign-notes-list/campaign-notes-list.component';

import { CampaignOwnerGuard } from "../shared/campaign-owner.guard";

const routes: Routes = [
  {
    path: '',
    component: CampaignNotesComponent,
    children: [
      {
        path: 'new',
        component: CampaignNoteEditorComponent,
        canActivate: [CampaignOwnerGuard]
      },
      {
        path: ':note_id/edit',
        component: CampaignNoteEditorComponent,
        canActivate: [CampaignOwnerGuard]
      },
      { path: '', component: CampaignNotesListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignNotesRoutingModule { }
