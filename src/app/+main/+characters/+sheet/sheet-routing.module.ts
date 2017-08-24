import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SheetComponent } from './sheet/sheet.component';

const sheetRoutes: Routes = [
  {
    path: '',
    component: SheetComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(sheetRoutes)],
  exports: [RouterModule]
})
export class SheetRoutingModule { }
