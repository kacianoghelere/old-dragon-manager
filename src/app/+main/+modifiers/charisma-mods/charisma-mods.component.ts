import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';

import { ModifiersService } from '../modifiers.service';
import { CharismaMod } from '../../../shared/models';

@Component({
  selector: 'app-charisma-mods',
  templateUrl: './charisma-mods.component.html',
  styleUrls: ['./charisma-mods.component.scss']
})
export class CharismaModsComponent implements OnInit, OnDestroy {

  charismaMods: CharismaMod[] = [];
  subscription: Subscription;

  constructor(
    private modService: ModifiersService
  ) { }

  ngOnInit() {
    this.subscription = this.modService.list<CharismaMod>("charisma_mods")
      .subscribe(
        (response) => this.charismaMods = response,
        (error) => console.log(error)
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
