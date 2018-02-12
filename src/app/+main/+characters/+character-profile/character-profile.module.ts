import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '../../../layout/layout.module';
import { SharedModule } from '../../../shared/shared.module';
import { CharacterProfileRoutingModule } from './character-profile-routing.module';
import { CharacterAttributesComponent } from './character-attributes/character-attributes.component';
import { CharacterCampaignsComponent } from './character-campaigns/character-campaigns.component';
import { CharacterInfoComponent } from './character-info/character-info.component';
import { CharacterProfileComponent } from './character-profile/character-profile.component';
import { CharacterEquipmentsComponent } from './character-equipments/character-equipments.component';
import { CharacterSpellsComponent } from './character-spells/character-spells.component';
import { CharacterItemsComponent } from './character-items/character-items.component';
import { CharacterStatisticsComponent } from './character-statistics/character-statistics.component';
import { CharacterAttributeComponent } from './character-attribute/character-attribute.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    SharedModule,
    CharacterProfileRoutingModule
  ],
  declarations: [
    CharacterAttributesComponent,
    CharacterCampaignsComponent,
    CharacterInfoComponent,
    CharacterProfileComponent,
    CharacterEquipmentsComponent,
    CharacterSpellsComponent,
    CharacterItemsComponent,
    CharacterStatisticsComponent,
    CharacterAttributeComponent
  ]
})
export class CharacterProfileModule { }
