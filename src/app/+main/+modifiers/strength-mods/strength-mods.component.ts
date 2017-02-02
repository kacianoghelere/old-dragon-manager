import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';

import { ModifiersService } from '../modifiers.service';
import { StrengthMod } from '../../../shared/entities/strength-mod';

@Component({
  selector: 'app-strength-mods',
  templateUrl: './strength-mods.component.html',
  styleUrls: ['./strength-mods.component.scss']
})
export class StrengthModsComponent implements OnInit, OnDestroy {

  strengthMods: StrengthMod[] = [];
  subscription: Subscription;

  constructor(
    private modService: ModifiersService
  ) { }

  ngOnInit() {
    this.subscription = this.modService.list<StrengthMod>("strength_mods")
      .subscribe(
        (response) => this.strengthMods = response,
        (error) => console.log(error));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
