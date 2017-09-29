import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ApiService } from './api.service';
import { ToasterService } from './toaster.service';
import { CoreComponent } from './components/core/core.component';
import { CampaignCardComponent } from './components/campaign-card/campaign-card.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { UserCardComponent } from './components/user-card/user-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    ApiService
  ],
  declarations: [
    CampaignCardComponent,
    CharacterCardComponent,
    UserCardComponent,
    CoreComponent
  ],
  exports: [
    CampaignCardComponent,
    CharacterCardComponent,
    UserCardComponent
  ]
})
export class SharedModule { }
