import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../../../shared/shared.module';
import { UtilModule } from "../../../../util/util.module";
import { CampaignNotesRoutingModule } from './campaign-notes-routing.module';
import { CampaignNoteEditorComponent } from './campaign-note-editor/campaign-note-editor.component';
import { CampaignNotesComponent } from './campaign-notes/campaign-notes.component';
import { CampaignNotesListComponent } from './campaign-notes-list/campaign-notes-list.component';
import { CampaignNotesService } from './shared/campaign-notes.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    UtilModule,
    CampaignNotesRoutingModule
  ],
  declarations: [
    CampaignNoteEditorComponent,
    CampaignNotesComponent,
    CampaignNotesListComponent
  ],
  providers: [CampaignNotesService]
})
export class CampaignNotesModule { }
