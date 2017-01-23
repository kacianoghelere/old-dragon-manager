import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FullTemplateComponent } from './full-template/full-template.component';

const exampleRoutes: Routes  = [
  { path: '', component: FullTemplateComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(exampleRoutes) ],
  exports: [ RouterModule ]
})
export class ExampleRoutingModule { }
