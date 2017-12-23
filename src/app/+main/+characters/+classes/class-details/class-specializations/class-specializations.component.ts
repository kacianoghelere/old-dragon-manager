import { Component, OnInit, Input } from '@angular/core';

import { CharacterClass } from '../../../../../shared/entities/character-class';

@Component({
  selector: 'class-specializations',
  templateUrl: './class-specializations.component.html',
  styleUrls: ['./class-specializations.component.scss']
})
export class ClassSpecializationsComponent implements OnInit {

  @Input() characterClass: CharacterClass;

  constructor() { }

  ngOnInit() {
  }

  emptyCollection(collection: any[]): boolean {
    if (collection && collection.length) return false;
    return true;
  }
}
