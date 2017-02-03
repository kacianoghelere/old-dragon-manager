import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters/characters.component';

@NgModule({
  imports: [
    CommonModule,
    CharactersRoutingModule
  ],
  declarations: [CharactersComponent]
})
export class CharactersModule { }
