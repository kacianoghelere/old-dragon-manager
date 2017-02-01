import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModifiersComponent } from './modifiers/modifiers.component';
import {
  StrengthModsComponent
} from './strength-mods/strength-mods.component';
import {
  DexterityModsComponent
} from './dexterity-mods/dexterity-mods.component';
import {
  ConstitutionModsComponent
} from './constitution-mods/constitution-mods.component';
import {
  IntelligenceModsComponent
} from './intelligence-mods/intelligence-mods.component';
import {
  WisdomModsComponent
} from './wisdom-mods/wisdom-mods.component';
import {
  CharismaModsComponent
} from './charisma-mods/charisma-mods.component';
import { ModifiersService } from './modifiers.service';
import { ModifiersRoutingModule } from './modifiers-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ModifiersRoutingModule
  ],
  declarations: [
    ModifiersComponent,
    StrengthModsComponent,
    DexterityModsComponent,
    ConstitutionModsComponent,
    IntelligenceModsComponent,
    WisdomModsComponent,
    CharismaModsComponent
  ],
  providers: [ModifiersService]
})
export class ModifiersModule { }
