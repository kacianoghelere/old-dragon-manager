import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';
import { ClassesRoutingModule } from './classes-routing.module';
import { ClassesComponent } from './classes/classes.component';
import { ClassDetailsComponent } from './class-details/class-details.component';
import { ClassInfoComponent } from './class-details/class-info/class-info.component';
import { ClassModsComponent } from './class-details/class-mods/class-mods.component';
import { ClassThiefTalentsComponent } from './class-details/class-thief-talents/class-thief-talents.component';
import { ClassMagicCirclesComponent } from './class-details/class-magic-circles/class-magic-circles.component';
import { ClassesListComponent } from './classes-list/classes-list.component';
import { ClassesService } from './shared/classes.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ClassesRoutingModule
  ],
  declarations: [
    ClassesComponent,
    ClassDetailsComponent,
    ClassInfoComponent,
    ClassModsComponent,
    ClassThiefTalentsComponent,
    ClassMagicCirclesComponent,
    ClassesListComponent
  ],
  providers: [ClassesService]
})
export class ClassesModule { }
