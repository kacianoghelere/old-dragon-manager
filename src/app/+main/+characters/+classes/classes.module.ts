import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassesComponent } from './classes/classes.component';
import { ClassesRoutingModule } from './classes-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ClassesRoutingModule
  ],
  declarations: [
    ClassesComponent
  ]
})
export class ClassesModule { }
