import { Alignment } from './alignment';
import { Dice } from './dice';
import { Trait } from './trait';
import { Skill } from './skill';
import { User } from './user';

export interface CharacterRace {

  alignment?: Alignment;
  armor_class_mod?: number;
  can_choose_mod?: boolean;
  char_mod?: number;
  cons_mod?: number;
  dex_mod?: number;
  dice?: Dice;
  example_picture?: string;
  flat_name?: string;
  id: number;
  int_mod?: number;
  maturity?: number;
  max_age?: number;
  max_height?: number;
  max_weight?: number;
  min_height?: number;
  min_weight?: number;
  movement_base?: number;
  name: string;
  picture?: string;
  singular_name: string;
  skills?: Skill[];
  str_mod?: number;
  traits?: Trait[];
  user: User;
  wis_mod?: number;
}
