import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CoreComponent } from '../../../../shared/components/core/core.component';
import { CharactersService } from '../../../shared/characters.service';
import { Character } from '../../../../shared/models';

@Component({
  selector: 'character-profile',
  templateUrl: './character-profile.component.html',
  styleUrls: ['./character-profile.component.scss']
})
export class CharacterProfileComponent extends CoreComponent
    implements OnInit, OnDestroy {

  character: Character;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private charactersService: CharactersService
  ) {
    super();
  }

  isCharacterOwner(): boolean {
    return this.charactersService.belongToCurrentUser(this.character);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.route.parent.params.subscribe((params: Character) => {
      let id = params['id'];

      if (id) {
        this.subscription = this.charactersService.find(id)
          .subscribe((response) => this.character = response);
      }
    });
  }

}
