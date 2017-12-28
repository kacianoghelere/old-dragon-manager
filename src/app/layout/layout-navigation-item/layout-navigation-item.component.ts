import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'layout-navigation-item',
  templateUrl: './layout-navigation-item.component.html',
  styleUrls: ['./layout-navigation-item.component.scss']
})
export class LayoutNavigationItemComponent implements OnInit {

  @Input('icon') icon: string;
  @Input('path') path: string;
  @Input('text') text: string;

  constructor() { }

  ngOnInit() {
  }

}
