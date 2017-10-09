import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'markdown-instructions',
  templateUrl: './markdown-instructions.component.html',
  styleUrls: ['./markdown-instructions.component.scss']
})
export class MarkdownInstructionsComponent implements OnInit {

  private showInstructions: boolean = false;

  constructor() { }


  ngOnInit() {
  }

  toggle() {
    this.showInstructions = !this.showInstructions;
  }

  get toggleClass(): any {
    return {
      'fa-toggle-on': this.showInstructions,
      'fa-toggle-off': !this.showInstructions
    };
  }
}
