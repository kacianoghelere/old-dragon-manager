import { Component, OnInit } from '@angular/core';

import { MarkdownService } from 'angular2-markdown';

@Component({
  selector: 'markdown-renderer',
  template: `
    <markdown>
      <ng-content></ng-content>
    </markdown>
  `
})
export class MarkdownRendererComponent implements OnInit {

  constructor(private _markdown: MarkdownService) { }

  ngOnInit() {
    // console.log(this._markdown.extendRenderer());
    this._markdown.renderer.link = (href: string, title: string, text: string) => {
      let regex = /^\s*\[\[[\/a-z0-9]+\]\]\s*/;
      if (regex.test(href)) {
        href = href.replace(/[\[\]]/g, '');
        return `<a [routerLink]="[${href}]" title="${title}">${text}</a>`;
      } else {
        return `<a href="${href}" title="${title}">${text}</a>`;
      }
    }
  }
}
