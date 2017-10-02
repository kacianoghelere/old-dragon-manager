import { Alignment } from './alignment';
import { Dice } from './dice';
import { Trait } from './trait';
import { Skill } from './skill';
import { User } from './user';

export class CharacterRace {

  alignment?: Alignment = null;
  armor_class_mod?: number = 0;
  can_choose_mod?: boolean = false;
  char_mod?: number = 0;
  cons_mod?: number = 0;
  dex_mod?: number = 0;
  dice?: Dice = null;
  example_picture?: string;
  id: number;
  int_mod?: number = 0;
  maturity?: number = 0;
  max_age?: number = 0;
  max_height?: number = 0;
  max_weight?: number = 0;
  min_height?: number = 0;
  min_weight?: number = 0;
  movement_base?: number = 0;
  name: string;
  picture?: string;
  singular_name: string;
  skills?: Skill[];
  str_mod?: number = 0;
  traits?: Trait[];
  user: User;
  wis_mod?: number = 0;
}
