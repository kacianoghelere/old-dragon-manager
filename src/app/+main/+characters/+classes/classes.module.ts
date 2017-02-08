import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassesComponent } from './classes/classes.component';
import { ClassDetailsComponent } from './class-details/class-details.component';
import { ClassesService } from './classes.service';
import { ClassesRoutingModule } from './classes-routing.module';
import { ClassInfoComponent } from './class-info/class-info.component';
import { ClassModsComponent } from './class-mods/class-mods.component';
import { ClassThiefTalentsComponent } from './class-thief-talents/class-thief-talents.component';
import { ClassMagicCirclesComponent } from './class-magic-circles/class-magic-circles.component';

@NgModule({
  imports: [
    CommonModule,
    ClassesRoutingModule
  ],
  declarations: [
    ClassesComponent,
    ClassDetailsComponent,
    ClassInfoComponent,
    ClassModsComponent,
    ClassThiefTalentsComponent,
    ClassMagicCirclesComponent
  ],
  providers: [ClassesService]
})
export class ClassesModule { }
