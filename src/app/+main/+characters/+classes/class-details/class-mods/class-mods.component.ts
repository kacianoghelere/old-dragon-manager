import { Component, OnInit, Input } from '@angular/core';

import { CharacterClass } from '../../../../../shared/entities/character-class';

@Component({
  selector: 'class-mods',
  templateUrl: './class-mods.component.html',
  styleUrls: ['./class-mods.component.scss']
})
export class ClassModsComponent implements OnInit {

  // Public variables
  // ---------------------------------------------------------------------------
  @Input() characterClass: CharacterClass;

  //
  // Functions
  // ===========================================================================

  constructor() { }

  //
  // Lifecycle hooks functions
  // ---------------------------------------------------------------------------

  ngOnInit() {
  }

}
