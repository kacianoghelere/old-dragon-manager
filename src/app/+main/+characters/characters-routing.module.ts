import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersComponent } from './characters/characters.component';
import { CharacterProfileComponent } from './character-profile/character-profile.component';
import { CharactersHomeComponent } from './characters-home/characters-home.component';

const charactersRoutes: Routes = [
  {
    path: '',
    component: CharactersComponent,
    children: [
      {
        path: 'classes',
        loadChildren: 'app/+main/+characters/+classes/classes.module#ClassesModule'
      },
      {
        path: 'races',
        loadChildren: 'app/+main/+characters/+races/races.module#RacesModule'
      },
      {
        path: 'sheet',
        loadChildren: 'app/+main/+characters/+sheet/sheet.module#SheetModule'
      },
      {
        path: 'specializations',
        loadChildren: 'app/+main/+characters/+specializations/specializations.module#SpecializationsModule'
      },
      { path: ':id', component: CharacterProfileComponent },
      { path: '', component: CharactersHomeComponent, pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(charactersRoutes)],
  exports: [RouterModule],
  providers: []
})
export class CharactersRoutingModule { }
