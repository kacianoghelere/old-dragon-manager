import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'layout-base',
  templateUrl: './layout-base.component.html',
  styleUrls: ['./layout-base.component.scss']
})
export class LayoutBaseComponent implements OnInit {

  @Input('cover') cover: String = '';
  @Input('description') description: String = '';
  @Input('pageTitle') title: String = '';
  @Input('animatedHeader') animatedHeader: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  get coverImage(): any {
    if (!this.cover) return null;
    return {'background-image': `url('${this.cover}')`};
  }

}
