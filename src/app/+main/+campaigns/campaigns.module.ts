import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UtilModule } from "../../util/util.module";
import { CampaignsRoutingModule } from './campaigns-routing.module';
import { CampaignsListComponent } from './campaigns-list/campaigns-list.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { CampaignComponent } from './campaign/campaign.component';
import { CampaignJournalsComponent } from './campaign/campaign-journals/campaign-journals.component';
import { CampaignNotesComponent } from './campaign/campaign-notes/campaign-notes.component';
import { CampaignCharactersComponent } from './campaign/campaign-characters/campaign-characters.component';
import { CampaignJournalFormComponent } from './campaign/campaign-journals/campaign-journal-form/campaign-journal-form.component';
import { CampaignNoteFormComponent } from './campaign/campaign-notes/campaign-note-form/campaign-note-form.component';
import { CampaignsService } from "./shared/campaigns.service";
import { LayoutModule } from '../../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    CampaignsRoutingModule,
    UtilModule
  ],
  declarations: [
    CampaignsListComponent,
    CampaignsComponent,
    CampaignComponent,
    CampaignJournalsComponent,
    CampaignNotesComponent,
    CampaignCharactersComponent,
    CampaignJournalFormComponent,
    CampaignNoteFormComponent
  ],
  providers: [
    CampaignsService
  ]
})
export class CampaignsModule { }
