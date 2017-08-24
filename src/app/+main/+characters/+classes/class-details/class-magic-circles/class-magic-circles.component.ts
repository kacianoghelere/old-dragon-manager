import { Component, OnInit, Input } from '@angular/core';

import { CharacterClass } from '../../../../../shared/entities/character-class';

@Component({
  selector: 'class-magic-circles',
  templateUrl: './class-magic-circles.component.html',
  styleUrls: ['./class-magic-circles.component.scss']
})
export class ClassMagicCirclesComponent implements OnInit {

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

  emptyCollection(collection: any[]): boolean {
    if (collection && collection.length) {
        return true;
    }
    return false;
  }

}
