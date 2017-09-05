import { Component, OnInit } from '@angular/core';

import { TrailItem } from '../../shared/entities/trail-item';
import { TrailService } from '../../shared/services/trail.service';

@Component({
  selector: 'layout-breadcrumb',
  templateUrl: './layout-breadcrumb.component.html',
  styleUrls: ['./layout-breadcrumb.component.scss']
})
export class LayoutBreadcrumbComponent implements OnInit {

  trail: TrailItem[];

  constructor(private trailService: TrailService) { }

  ngOnInit() {
    this.trailService.trailUpdate.subscribe((trail) => this.trail = trail);
  }

  hasChildren(item: TrailItem): boolean {
    return !!(item.children && item.children.length);
  }
}
