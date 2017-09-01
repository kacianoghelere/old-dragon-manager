import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters/characters.component';
import { CharactersHomeComponent } from './characters-home/characters-home.component';

@NgModule({
  imports: [
    CommonModule,
    CharactersRoutingModule
  ],
  declarations: [CharactersComponent, CharactersHomeComponent]
})
export class CharactersModule { }
