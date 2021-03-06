import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullTemplateComponent } from './full-template/full-template.component';
import { ExampleRoutingModule }  from './example-routing.module';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    ExampleRoutingModule
  ],
  declarations: [
    FullTemplateComponent
  ],
  exports: []
})
export class ExampleModule { }
