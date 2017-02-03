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
