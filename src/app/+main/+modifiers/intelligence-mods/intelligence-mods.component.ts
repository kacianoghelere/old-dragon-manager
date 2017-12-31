import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';

import { ModifiersService } from '../modifiers.service';
import { IntelligenceMod } from '../../../shared/models';

@Component({
  selector: 'app-intelligence-mods',
  templateUrl: './intelligence-mods.component.html',
  styleUrls: ['./intelligence-mods.component.scss']
})
export class IntelligenceModsComponent implements OnInit, OnDestroy {

  intelligenceMods: IntelligenceMod[] = [];
  subscription: Subscription;

  constructor(
    private modService: ModifiersService
  ) { }

  ngOnInit() {
    this.subscription = this.modService.list<IntelligenceMod>("intelligence_mods")
      .subscribe(
        (response) => this.intelligenceMods = response,
        (error) => console.log(error));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
