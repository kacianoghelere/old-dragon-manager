import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss']
})
export class MarkdownEditorComponent implements OnInit {

  @Input('markdownControl') markdownControl: FormControl;
  selectedEditorTab: number = 0;

  constructor() { }

  isSelected(index): boolean {
    return this.selectedEditorTab === index;
  }

  setSelected(index: number) {
    this.selectedEditorTab = index;
  }

  ngOnInit() {
  }

}
