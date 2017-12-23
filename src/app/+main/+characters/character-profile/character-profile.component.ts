import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CoreComponent } from '../../../shared/components/core/core.component';
import { Character } from '../../../shared/entities/character';
import { CharactersService } from '../../shared/characters.service';

@Component({
  selector: 'character-profile',
  templateUrl: './character-profile.component.html',
  styleUrls: ['./character-profile.component.scss']
})
export class CharacterProfileComponent extends CoreComponent
    implements OnInit, OnDestroy {

  subscription: Subscription;
  character: Character;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private charactersService: CharactersService
  ) {
    super();
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id = params['id'];

      if (id) {
        this.subscription = this.charactersService.find(id)
          .subscribe((response) => this.character = response);
      }
    });
  }

}
