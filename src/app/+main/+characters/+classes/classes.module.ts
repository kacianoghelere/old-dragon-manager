import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassesRoutingModule } from './classes-routing.module';
import { ClassesComponent } from './classes/classes.component';
import { ClassDetailsComponent } from './class-details/class-details.component';
import { ClassInfoComponent } from './class-details/class-info/class-info.component';
import { ClassModsComponent } from './class-details/class-mods/class-mods.component';
import { ClassThiefTalentsComponent } from './class-details/class-thief-talents/class-thief-talents.component';
import { ClassMagicCirclesComponent } from './class-details/class-magic-circles/class-magic-circles.component';
import { ClassesListComponent } from './classes-list/classes-list.component';
import { ClassUndeadBanesComponent } from './class-details/class-undead-banes/class-undead-banes.component';
import { LayoutModule } from '../../../layout/layout.module';
import { ClassSpecializationsComponent } from './class-details/class-specializations/class-specializations.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    ClassesRoutingModule
  ],
  declarations: [
    ClassesComponent,
    ClassDetailsComponent,
    ClassInfoComponent,
    ClassModsComponent,
    ClassThiefTalentsComponent,
    ClassMagicCirclesComponent,
    ClassesListComponent,
    ClassUndeadBanesComponent,
    ClassSpecializationsComponent
  ]
})
export class ClassesModule { }
