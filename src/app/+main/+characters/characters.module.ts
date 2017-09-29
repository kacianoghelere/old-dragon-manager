import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '../../layout/layout.module';
import { SharedModule } from '../../shared/shared.module';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters/characters.component';
import { CharactersHomeComponent } from './characters-home/characters-home.component';
import { CharacterProfileComponent } from './character-profile/character-profile.component';
import { CharacterAttributesComponent } from './character-profile/character-attributes/character-attributes.component';
import { CharacterInfoComponent } from './character-profile/character-info/character-info.component';
import { CharacterCampaignsComponent } from './character-profile/character-campaigns/character-campaigns.component';
import { CharactersListComponent } from './characters-list/characters-list.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    SharedModule,
    CharactersRoutingModule
  ],
  declarations: [
    CharactersComponent,
    CharactersHomeComponent,
    CharacterProfileComponent,
    CharacterAttributesComponent,
    CharacterInfoComponent,
    CharacterCampaignsComponent,
    CharactersListComponent
  ]
})
export class CharactersModule { }
