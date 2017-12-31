import { Component, OnInit, Input } from '@angular/core';

import { CharacterClass } from '../../../../../shared/models';

@Component({
  selector: 'class-undead-banes',
  templateUrl: './class-undead-banes.component.html',
  styleUrls: ['./class-undead-banes.component.scss']
})
export class ClassUndeadBanesComponent implements OnInit {

  @Input() characterClass: CharacterClass;

  constructor() { }

  ngOnInit() {
  }

  emptyCollection(collection: any[]): boolean {
    if (collection && collection.length) return false;
    return true;
  }

}
