import { Subscription } from 'rxjs/Subscription';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { CoreComponent } from '../../../shared/components/core/core.component';
import { Character } from '../../../shared/models';
import { CharactersService } from '../../shared/characters.service';

@Component({
  selector: 'characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent extends CoreComponent
    implements OnInit, OnDestroy {

  subscription: Subscription;
  characters: Character[];

  constructor(
    private charactersService: CharactersService
  ) {
    super();
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.charactersService.list()
      .subscribe((response) => this.characters = response);
  }

}
