import { Alignment } from './alignment';
import { Dice } from './dice';
import { User } from './user';

export class CharacterRace {

  id: number;
  name: string;
  min_height?: number = 0;
  max_height?: number = 0;
  min_weight?: number = 0;
  max_weight?: number = 0;
  maturity?: number = 0;
  max_age?: number = 0;
  movement_base?: number = 0;
  armor_class_mod?: number = 0;
  can_choose_mod?: boolean = false;
  str_mod?: number = 0;
  dex_mod?: number = 0;
  cons_mod?: number = 0;
  int_mod?: number = 0;
  wis_mod?: number = 0;
  char_mod?: number = 0;
  alignment?: Alignment = null;
  dice?: Dice = null;
  user: User;
}
