import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ApiService } from './api.service';
import { ToasterService } from './toaster.service';
import { CharacterCardComponent } from './components/character-card/character-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    ApiService
  ],
  declarations: [CharacterCardComponent],
  exports: [CharacterCardComponent]
})
export class SharedModule { }
