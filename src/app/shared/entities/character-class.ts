import { User } from './user';
import { Dice } from './dice';
import { Perk } from './perk';
import { AttributeRequirement } from './attribute-requirement';
import { CharacterClassType } from './character-class-type';
import { CharacterClassEvolution } from './character-class-evolution';
import { CharacterClassMagicCircle } from './character-class-magic-circle';
import { CharacterSpecialization } from './character-specialization';
import { CharacterClassThiefTalent } from './character-class-thief-talent';

export interface CharacterClass {

  description?: string;
  dice?: Dice;
  evolutions?: CharacterClassEvolution[];
  example_picture?: string;
  flat_name?: string;
  id: number;
  magic_circles?: CharacterClassMagicCircle[];
  name: string;
  perk?: Perk;
  picture?: string;
  requirement?: AttributeRequirement;
  short_description?: string;
  specializations?: CharacterSpecialization[];
  style?: string;
  thief_talents?: CharacterClassThiefTalent[];
  type?: CharacterClassType;
  user: User;
}
