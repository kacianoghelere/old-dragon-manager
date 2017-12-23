import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '../../../layout/layout.module';
import { CampaignProfileRoutingModule } from './campaign-profile-routing.module';

import { CampaignProfileComponent } from './campaign-profile/campaign-profile.component';

import { CampaignOwnerGuard } from './shared/campaign-owner.guard';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    CampaignProfileRoutingModule
  ],
  declarations: [
    CampaignProfileComponent
  ],
  providers: [
    CampaignOwnerGuard
  ]
})
export class CampaignProfileModule { }
