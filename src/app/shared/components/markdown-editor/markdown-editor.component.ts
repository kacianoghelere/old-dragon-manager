import { Input, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { CoreComponent } from '@shared/components/core/core.component';

@Component({
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: MarkdownEditorComponent,
    multi: true,
  }],
  selector: 'markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss']
})
export class MarkdownEditorComponent extends CoreComponent
    implements ControlValueAccessor, OnInit {

  @Input('placeholder') placeholder: string;
  text: string;
  selectedEditorTab: number = 0;
  onChange: any;

  constructor() {
    super();
  }

  compileText(text: string) {
    return this.campaignPagesService.compileText(text, this.isCampaignOwner());
  }

  isSelected(index): boolean {
    return this.selectedEditorTab === index;
  }

  registerOnChange(fn: any): void {
    this.onChange = () => fn(this.text);
  }

  registerOnTouched(_fn: any): void {
    return;
  }

  ngOnInit() {
    this.text = this.text || '';
  }

  setSelected(index: number) {
    this.selectedEditorTab = index;
  }

  writeValue(value: any): void {
    if (value) {
      this.text = value;
    }
  }
}
