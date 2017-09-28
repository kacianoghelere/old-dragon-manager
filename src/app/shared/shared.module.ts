import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ApiService } from './api.service';
import { ToasterService } from './toaster.service';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CoreComponent } from './components/core/core.component';
import { UserCardComponent } from './components/user-card/user-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    ApiService
  ],
  declarations: [
    CharacterCardComponent,
    UserCardComponent,
    CoreComponent
  ],
  exports: [
    CharacterCardComponent,
    UserCardComponent
  ]
})
export class SharedModule { }
