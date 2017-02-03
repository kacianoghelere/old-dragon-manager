import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifiersComponent } from './modifiers/modifiers.component';
import { StrengthModsComponent } from './strength-mods/strength-mods.component';
import { DexterityModsComponent } from './dexterity-mods/dexterity-mods.component';
import { ConstitutionModsComponent } from './constitution-mods/constitution-mods.component';
import { IntelligenceModsComponent } from './intelligence-mods/intelligence-mods.component';
import { WisdomModsComponent } from './wisdom-mods/wisdom-mods.component';
import { CharismaModsComponent } from './charisma-mods/charisma-mods.component';

const routes: Routes = [
  {
    path: '',
    component: ModifiersComponent,
    children: [
      {path: 'strength', component: StrengthModsComponent},
      {path: 'dexterity', component: DexterityModsComponent},
      {path: 'constitution', component: ConstitutionModsComponent},
      {path: 'intelligence', component: IntelligenceModsComponent},
      {path: 'wisdom', component: WisdomModsComponent},
      {path: 'charisma', component: CharismaModsComponent},
      {path: '**', redirectTo: 'strength', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ModifiersRoutingModule { }
