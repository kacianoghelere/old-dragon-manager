import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'router-link',
  template: `
    <a [routerLink]="[path]" [ngClass]="classes">
      <ng-content></ng-content>
    </a>
  `,
  styleUrls: ['./router-link.component.scss']
})
export class RouterLinkComponent implements OnInit {

  @Input('classes') classes: string = '';
  @Input('path') path: string = '/';

  constructor() { }

  ngOnInit() {
  }

}
