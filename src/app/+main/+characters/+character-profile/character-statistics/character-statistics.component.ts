import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CoreComponent } from '../../../../shared/components/core/core.component';
import { CharactersService } from '../../../shared/characters.service';
import { Character } from '../../../../shared/entities/character';

@Component({
  selector: 'character-statistics',
  templateUrl: './character-statistics.component.html',
  styleUrls: ['./character-statistics.component.scss']
})
export class CharacterStatisticsComponent extends CoreComponent
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

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.route.parent.parent.params.subscribe((params: Character) => {
      let id = params['id'];

      if (id) {
        this.subscription = this.charactersService.find(id).subscribe(
            (character: Character) => this.character = character
        );
      }
    });
  }
}
