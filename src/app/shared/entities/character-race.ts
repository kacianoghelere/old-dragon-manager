import { User } from './user';
import { Dice } from './dice';

export class CharacterRace {

  id: number;
  name: string;
  min_height: number;
  max_height: number;
  min_weight: number;
  max_weight: number;
  maturity: number;
  max_age: number;
  movement_base: number;
  armor_class_mod: number;
  can_choose_mod: number;
  str_mod: number;
  dex_mod: number;
  cons_mod: number;
  int_mod: number;
  wis_mod: number;
  char_mod: number;
  alignment_id: number;
  dice: Dice;
  user: User;
}
