import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterEquipmentsComponent } from './character-equipments/character-equipments.component';
import { CharacterItemsComponent } from './character-items/character-items.component';
import { CharacterProfileComponent } from './character-profile/character-profile.component';
import { CharacterSpellsComponent } from './character-spells/character-spells.component';
import { CharacterStatisticsComponent } from './character-statistics/character-statistics.component';

const routes: Routes = [
  {
    path: '',
    component: CharacterProfileComponent,
    children: [
      { path: 'equipments', component: CharacterEquipmentsComponent },
      { path: 'items', component: CharacterItemsComponent },
      { path: 'spells', component: CharacterSpellsComponent },
      { path: 'statistics', component: CharacterStatisticsComponent },
      { path: '', redirectTo: 'statistics', pathMatch: 'full' },
      { path: '**', redirectTo: 'statistics', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterProfileRoutingModule { }
