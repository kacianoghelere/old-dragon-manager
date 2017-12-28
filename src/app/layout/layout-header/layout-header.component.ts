import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'layout-header',
  template: `
    <div class="fixed-top">
      <layout-navigation [title]="title"></layout-navigation>
    </div>
  `,
  styleUrls: ['./layout-header.component.scss']
})
export class LayoutHeaderComponent implements OnInit {

  @Input() title: string = '';

  constructor() { }

  ngOnInit() {
  }
}
