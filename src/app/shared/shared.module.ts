import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ApiService } from './api.service';
import { ToasterService } from './toaster.service';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CoreComponent } from './components/core/core.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    ApiService
  ],
  declarations: [CharacterCardComponent, CoreComponent],
  exports: [CharacterCardComponent]
})
export class SharedModule { }
