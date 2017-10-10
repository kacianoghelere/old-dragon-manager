import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutModule } from '../../layout/layout.module';
import { SharedModule } from '../../shared/shared.module';
import { UtilModule } from "../../util/util.module";
import { CampaignProfileModule } from './campaign-profile/campaign-profile.module';
import { CampaignsRoutingModule } from './campaigns-routing.module';

import { CampaignEditorComponent } from './campaign-editor/campaign-editor.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { CampaignsListComponent } from './campaigns-list/campaigns-list.component';

import { CampaignsService } from "./shared/campaigns.service";

import { CampaignGuard } from "./shared/campaign.guard";
import { CampaignOwnerGuard } from "./shared/campaign-owner.guard";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    UtilModule,
    SharedModule,
    CampaignProfileModule,
    CampaignsRoutingModule
  ],
  declarations: [
    CampaignEditorComponent,
    CampaignsComponent,
    CampaignsListComponent
  ],
  providers: [
    CampaignsService,
    CampaignGuard,
    CampaignOwnerGuard
  ]
})
export class CampaignsModule { }
