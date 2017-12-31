import { Component, OnInit } from '@angular/core';

import { Weapon } from '../../../../shared/models';

@Component({
  selector: 'sheet-character-weapons',
  templateUrl: './sheet-character-weapons.component.html',
  styleUrls: ['./sheet-character-weapons.component.scss']
})
export class SheetCharacterWeaponsComponent implements OnInit {

  weapons: Weapon[];

  constructor() { }

  ngOnInit() {
    this.weapons = [
      {
        id: 1,
        name: 'Arma 1',
        description: '',
        initiative: 1,
        ranged: true,
        range: 1,
        damage: 5,
        weight: 1,
        price: 1,
        alignment_id: 1,
        dice_id: 1,
        material_type_id: 1,
        origin_id: 1,
        user_id: 1,
        weapon_type_id: 1
      },
      {
        id: 2,
        name: 'Arma 2',
        description: '',
        initiative: 2,
        ranged: false,
        range: 0,
        damage: 5,
        weight: 1,
        price: 1,
        alignment_id: 1,
        dice_id: 1,
        material_type_id: 1,
        origin_id: 1,
        user_id: 1,
        weapon_type_id: 1
      },
      {
        id: 3,
        name: 'Arma 3',
        description: '',
        initiative: 3,
        ranged: false,
        range: 0,
        damage: 5,
        weight: 1,
        price: 1,
        alignment_id: 1,
        dice_id: 1,
        material_type_id: 1,
        origin_id: 1,
        user_id: 1,
        weapon_type_id: 1
      },
      {
        id: 4,
        name: 'Arma 4',
        description: '',
        initiative: 4,
        ranged: false,
        range: 0,
        damage: 5,
        weight: 1,
        price: 1,
        alignment_id: 1,
        dice_id: 1,
        material_type_id: 1,
        origin_id: 1,
        user_id: 1,
        weapon_type_id: 1
      }
    ];
  }

}
