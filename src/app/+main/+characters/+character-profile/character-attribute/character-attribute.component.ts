import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { CoreComponent } from '../../../../shared/components/core/core.component';

@Component({
  selector: 'character-attribute',
  templateUrl: './character-attribute.component.html',
  styleUrls: ['./character-attribute.component.scss']
})
export class CharacterAttributeComponent extends CoreComponent
    implements OnInit, OnDestroy {

  @Input('title') title: string;
  @Input('value') value: number;

  constructor() {
    super();
  }

  ngOnDestroy() {
  }

  ngOnInit() {
  }
}
