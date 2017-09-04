import { Component, OnInit, Input } from '@angular/core';

import { Link } from '../../entities/link';

@Component({
  selector: 'breadcrumb',
  template: `
    <nav class="breadcrumb">
      <a class="breadcrumb-item" *ngFor="let link of trail"
          [routerLink]="[link.route]">
        <b>{{link.title}}</b>
      </a>
      <span class="breadcrumb-item active">{{currentPage}}</span>
    </nav>
  `,
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @Input() trail: Link[] = [];
  @Input('currentPage') currentPage: String = '';

  constructor() { }

  ngOnInit() {
  }

}
