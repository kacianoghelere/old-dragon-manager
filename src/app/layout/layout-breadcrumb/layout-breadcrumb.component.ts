import { Component, OnInit } from '@angular/core';

import { TrailItem } from '../../shared/entities/trail-item';
import { TrailService } from '../../shared/services/trail.service';

@Component({
  selector: 'layout-breadcrumb',
  templateUrl: './layout-breadcrumb.component.html',
  styleUrls: ['./layout-breadcrumb.component.scss']
})
export class LayoutBreadcrumbComponent implements OnInit {

  constructor(private trailService: TrailService) { }

  hasChildren(item: TrailItem): boolean {
    return !!(item.children && item.children.length);
  }

  get trail(): TrailItem[] {
    return this.trailService.trail;
  }

  ngOnInit() {
  }
}
