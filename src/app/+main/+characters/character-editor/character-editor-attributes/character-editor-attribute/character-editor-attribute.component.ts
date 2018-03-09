import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

import { CoreComponent } from '@shared/components/core/core.component';


@Component({
  selector: 'character-editor-attribute',
  templateUrl: './character-editor-attribute.component.html',
  styleUrls: ['./character-editor-attribute.component.scss']
})
export class CharacterEditorAttributeComponent extends CoreComponent
  implements OnInit {

  @Input('controlId') controlId: string;
  @Input('label') label: string;
  @Input('field') field: AbstractControl;
  @Input('title') title: string;

  constructor() {
    super();
  }

  calcModifier() {
    return this.getModifier(this.field.value);
  }

  ngOnInit() {
    this.field = this.field || new FormControl();
  }
}
