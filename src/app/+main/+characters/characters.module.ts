import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters/characters.component';
import { CharactersHomeComponent } from './characters-home/characters-home.component';
import { LayoutModule } from '../../layout/layout.module';
import { CharacterProfileComponent } from './character-profile/character-profile.component';
import { CharacterAttributesComponent } from './character-profile/character-attributes/character-attributes.component';
import { CharacterInfoComponent } from './character-profile/character-info/character-info.component';
import { CharacterCampaignsComponent } from './character-profile/character-campaigns/character-campaigns.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    CharactersRoutingModule
  ],
  declarations: [
    CharactersComponent,
    CharactersHomeComponent,
    CharacterProfileComponent,
    CharacterAttributesComponent,
    CharacterInfoComponent,
    CharacterCampaignsComponent
  ]
})
export class CharactersModule { }
