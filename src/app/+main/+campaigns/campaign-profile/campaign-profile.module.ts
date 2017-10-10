import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '../../../layout/layout.module';
import { CampaignProfileRoutingModule } from './campaign-profile-routing.module';

// import { CampaignCharactersModule } from './campaign-characters/campaign-characters.module';
// import { CampaignJournalsModule } from './campaign-journals/campaign-journals.module';
// import { CampaignMapsModule } from './campaign-maps/campaign-maps.module';
// import { CampaignNotesModule } from './campaign-notes/campaign-notes.module';
// import { CampaignWikiModule } from './campaign-wiki/campaign-wiki.module';

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
