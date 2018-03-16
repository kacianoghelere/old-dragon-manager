import { Input, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { CoreComponent } from '@shared/components/core/core.component';

@Component({
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CharacterEditorAttributeComponent,
    multi: true,
  }],
  selector: 'character-editor-attribute',
  template: `
    <div class="attribute" [title]="name">
      <label for="attribute-{{ name }}">{{ shortName }}</label>
      <div class="input-group">
        <input class="form-control"
          type="number"
          id="attribute-{{ name }}"
          [(ngModel)]="attribute"
          (change)="onChange()"
          required>
        <span class="input-group-addon">
          <small>{{ modifier }}</small>
        </span>
      </div>
    </div>
  `,
  styleUrls: ['./character-editor-attribute.component.scss']
})
export class CharacterEditorAttributeComponent extends CoreComponent
    implements ControlValueAccessor, OnInit {

  @Input('name') name: string;
  attribute: number;
  onChange: any;

  constructor() {
    super();
  }

  get modifier(): string {
    let modifier = Math.floor((this.attribute - 10) / 2);

    return modifier >= 0 ? `+${modifier}` : `${modifier}`;
  }

  ngOnInit() {
    this.attribute = this.attribute || 1;
  }

  registerOnChange(fn: any): void {
    this.onChange = () => fn(this.attribute);
  }

  registerOnTouched(_fn: any): void {
    return;
  }

  get shortName() {
    return this.name.slice(0, 3).toUpperCase();
  }

  writeValue(value: any): void {
    if (value) {
      this.attribute = value;
    }
  }
}
