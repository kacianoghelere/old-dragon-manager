import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesService } from './roles.service';

@NgModule({
  imports: [CommonModule],
  providers: [RolesService]
})
export class RolesModule { }
