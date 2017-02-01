import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';

import { ModifiersService } from '../modifiers.service';
import { ConstitutionMod } from '../../../shared/entities/constitution-mod';

@Component({
  selector: 'app-constitution-mods',
  templateUrl: './constitution-mods.component.html',
  styleUrls: ['./constitution-mods.component.scss']
})
export class ConstitutionModsComponent implements OnInit, OnDestroy {

  constitutionMods: ConstitutionMod[] = [];
  subscription: Subscription;

  constructor(
    private modService: ModifiersService
  ) { }

  ngOnInit() {
    this.subscription = this.modService
      .list<ConstitutionMod>("constitution_mods")
      .subscribe(
        (response) => this.constitutionMods = response,
        (error) => console.log(error));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
