import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainBaseComponent } from './main-base/main-base.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { AuthenticationGuard } from '../shared/guards/authentication.guard';

const mainRoutes: Routes = [
  {
    path: '',
    component: MainBaseComponent,
    children: [
      {
        path: 'modifiers',
        loadChildren: `app/+main/+modifiers/modifiers.module#ModifiersModule`
      },
      {
        path: 'characters',
        loadChildren: `app/+main/+characters/characters.module#CharactersModule`
      },
      {
        path: 'campaigns',
        loadChildren: `app/+main/+campaigns/campaigns.module#CampaignsModule`
      },
      {path: '', component: MainHomeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
