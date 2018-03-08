import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutModule } from '../../layout/layout.module';
import { SharedModule } from '../../shared/shared.module';
import { CharacterEditorComponent } from './character-editor/character-editor.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters/characters.component';
import { CharactersHomeComponent } from './characters-home/characters-home.component';
import { CharactersListComponent } from './characters-list/characters-list.component';

import { AlignmentsService } from './shared/alignments.service';
import { CharactersService } from './shared/characters.service';
import { ClassesService } from './shared/classes.service';
import { RacesService } from './shared/races.service';
import { SpecializationsService } from './shared/specializations.service';
import { CharacterEditorAttributesComponent } from './character-editor/character-editor-attributes/character-editor-attributes.component';
import { CharacterEditorAttributeComponent } from './character-editor/character-editor-attributes/character-editor-attribute/character-editor-attribute.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    SharedModule,
    CharactersRoutingModule
  ],
  declarations: [
    CharactersComponent,
    CharactersHomeComponent,
    CharactersListComponent,
    CharacterEditorComponent,
    CharacterEditorAttributesComponent,
    CharacterEditorAttributeComponent
  ],
  providers: [
    AlignmentsService,
    CharactersService,
    ClassesService,
    RacesService,
    SpecializationsService
  ]
})
export class CharactersModule { }
