import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { CoreComponent } from '../../../../shared/components/core/core.component';
import { Character } from '../../../../shared/models';

@Component({
  selector: 'character-campaigns',
  templateUrl: './character-campaigns.component.html',
  styleUrls: ['./character-campaigns.component.scss']
})
export class CharacterCampaignsComponent extends CoreComponent
    implements OnInit, OnDestroy {

  @Input('character') character: Character;

  constructor() {
    super();
  }

  ngOnDestroy() {
  }

  ngOnInit() {
  }
}
