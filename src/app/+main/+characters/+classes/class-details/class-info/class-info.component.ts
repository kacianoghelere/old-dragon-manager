import { Component, OnInit, Input } from '@angular/core';

import { CharacterClass } from '../../../../../shared/entities/character-class';

@Component({
  selector: 'class-info',
  templateUrl: './class-info.component.html',
  styleUrls: ['./class-info.component.scss']
})
export class ClassInfoComponent implements OnInit {

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

  yesNoFormat(
    source: any,
    property: string,
    yesParam: string = 'Sim',
    noParam: string = 'Não'
  ): string {
    return source[property] ? yesParam : noParam;
  }
}
