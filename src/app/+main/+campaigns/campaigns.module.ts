import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UtilModule } from "../../util/util.module";
import { CampaignsRoutingModule } from './campaigns-routing.module';
import { CampaignsListComponent } from './campaigns-list/campaigns-list.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { CampaignComponent } from './campaign/campaign.component';
import { CampaignsService } from "./shared/campaigns.service";
import { CampaignJournalsComponent } from './campaign/campaign-journals/campaign-journals.component';
import { CampaignNotesComponent } from './campaign/campaign-notes/campaign-notes.component';
import { CampaignCharactersComponent } from './campaign/campaign-characters/campaign-characters.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CampaignsRoutingModule,
    UtilModule
  ],
  declarations: [
    CampaignsListComponent,
    CampaignsComponent,
    CampaignComponent,
    CampaignJournalsComponent,
    CampaignNotesComponent,
    CampaignCharactersComponent
  ],
  providers: [CampaignsService]
})
export class CampaignsModule { }
