import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { ModifiersComponent } from './modifiers/modifiers.component';
import { StrengthModsComponent } from './strength-mods/strength-mods.component';
import { DexterityModsComponent } from './dexterity-mods/dexterity-mods.component';
import { ConstitutionModsComponent } from './constitution-mods/constitution-mods.component';
import { IntelligenceModsComponent } from './intelligence-mods/intelligence-mods.component';
import { WisdomModsComponent } from './wisdom-mods/wisdom-mods.component';
import { CharismaModsComponent } from './charisma-mods/charisma-mods.component';
import { ModifiersService } from './modifiers.service';
import { ModifiersRoutingModule } from './modifiers-routing.module';
import { LayoutModule } from '../../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    ModifiersRoutingModule,
    SharedModule
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
