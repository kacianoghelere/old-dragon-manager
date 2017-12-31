import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';

import { ModifiersService } from '../modifiers.service';
import { WisdomMod } from '../../../shared/models';

@Component({
  selector: 'app-wisdom-mods',
  templateUrl: './wisdom-mods.component.html',
  styleUrls: ['./wisdom-mods.component.scss']
})
export class WisdomModsComponent implements OnInit, OnDestroy {

  wisdomMods: WisdomMod[] = [];
  subscription: Subscription;

  constructor(
    private modService: ModifiersService
  ) { }

  ngOnInit() {
    this.subscription = this.modService.list<WisdomMod>("wisdom_mods")
      .subscribe(
        (response) => this.wisdomMods = response,
        (error) => console.log(error));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
