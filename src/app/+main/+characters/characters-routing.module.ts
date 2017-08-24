import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersComponent } from './characters/characters.component';

const charactersRoutes: Routes = [
  {
    path: '',
    component: CharactersComponent,
    children: [
      {
        path: 'classes',
        loadChildren: `app/+main/+characters/+classes/classes.module#ClassesModule`
      },
      {
        path: 'races',
        loadChildren: `app/+main/+characters/+races/races.module#RacesModule`
      },
      {
        path: 'sheet',
        loadChildren: `app/+main/+characters/+sheet/sheet.module#SheetModule`
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(charactersRoutes)],
  exports: [RouterModule],
  providers: []
})
export class CharactersRoutingModule { }
