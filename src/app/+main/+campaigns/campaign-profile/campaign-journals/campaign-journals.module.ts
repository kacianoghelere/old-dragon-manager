import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../../../shared/shared.module';
import { UtilModule } from "../../../../util/util.module";
import { CampaignJournalsRoutingModule } from './campaign-journals-routing.module';
import { CampaignJournalEditorComponent } from './campaign-journal-editor/campaign-journal-editor.component';
import { CampaignJournalsComponent } from './campaign-journals/campaign-journals.component';
import { CampaignJournalsListComponent } from './campaign-journals-list/campaign-journals-list.component';
import { CampaignJournalsService } from './shared/campaign-journals.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    UtilModule,
    CampaignJournalsRoutingModule
  ],
  declarations: [
    CampaignJournalEditorComponent,
    CampaignJournalsComponent,
    CampaignJournalsListComponent
  ],
  providers: [CampaignJournalsService]
})
export class CampaignJournalsModule { }
