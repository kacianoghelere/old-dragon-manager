import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';

import { ModifiersService } from '../modifiers.service';
import { DexterityMod } from '../../../shared/entities/dexterity-mod';

@Component({
  selector: 'app-dexterity-mods',
  templateUrl: './dexterity-mods.component.html',
  styleUrls: ['./dexterity-mods.component.scss']
})
export class DexterityModsComponent implements OnInit, OnDestroy {

  dexterityMods: DexterityMod[] = [];
  subscription: Subscription;

  constructor(
    private modService: ModifiersService
  ) { }

  ngOnInit() {
    this.subscription = this.modService.list<DexterityMod>("dexterity_mods")
      .subscribe(
        (response) => this.dexterityMods = response,
        (error) => console.log(error)
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
