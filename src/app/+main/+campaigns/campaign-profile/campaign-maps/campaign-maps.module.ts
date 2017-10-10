import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../../../shared/shared.module';
import { UtilModule } from "../../../../util/util.module";
import { CampaignMapsRoutingModule } from './campaign-maps-routing.module';
import { CampaignMapEditorComponent } from './campaign-map-editor/campaign-map-editor.component';
import { CampaignMapsComponent } from './campaign-maps/campaign-maps.component';
import { CampaignMapsListComponent } from './campaign-maps-list/campaign-maps-list.component';
import { CampaignMapsService } from './shared/campaign-maps.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    UtilModule,
    CampaignMapsRoutingModule
  ],
  declarations: [
    CampaignMapEditorComponent,
    CampaignMapsComponent,
    CampaignMapsListComponent
  ],
  providers: [CampaignMapsService]
})
export class CampaignMapsModule { }
