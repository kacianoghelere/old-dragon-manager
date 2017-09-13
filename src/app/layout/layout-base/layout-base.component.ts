import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'layout-base',
  templateUrl: './layout-base.component.html',
  styleUrls: ['./layout-base.component.scss']
})
export class LayoutBaseComponent implements OnInit {

  @Input() title: String = '';
  @Input() description: String = '';
  @Input() cover: String = '';

  constructor() { }

  ngOnInit() {
  }

  get coverImage(): any {
    if (!this.cover) return null;
    return {'background-image': `url('${this.cover}')`};
  }

}
