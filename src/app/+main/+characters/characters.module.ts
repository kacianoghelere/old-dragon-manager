import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters/characters.component';
import { CharactersHomeComponent } from './characters-home/characters-home.component';
import { LayoutModule } from '../../layout/layout.module';
import { CharacterProfileComponent } from './character-profile/character-profile.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    CharactersRoutingModule
  ],
  declarations: [
    CharactersComponent,
    CharactersHomeComponent,
    CharacterProfileComponent
  ]
})
export class CharactersModule { }
