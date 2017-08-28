import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { MainFeedComponent } from './main-feed/main-feed.component';
import { AuthenticationGuard } from '../authentication/authentication.guard';

const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
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
      {path: '', component: MainFeedComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
