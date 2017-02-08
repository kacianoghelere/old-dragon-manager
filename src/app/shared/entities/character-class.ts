import { User } from './user';
import { Dice } from './dice';
import { Perk } from './perk';
import { AttributeRequirement } from './attr-requirement';
import { CharacterClassType } from './character-class-type';
import { CharacterClassEvolution } from './character-class-evolution';
import { CharacterClassMagicCircle } from './character-class-magic-circle';
import { CharacterClassSpecialization } from './character-class-specialization';
import { CharacterClassThiefTalent } from './character-class-thief-talent';

export class CharacterClass {

    id: number;
    name: string;
    description: string;
    dice: Dice;
    perk: Perk;
    requirement: AttributeRequirement;
    class_type: CharacterClassType;
    evolutions: CharacterClassEvolution[];
    specializations: CharacterClassSpecialization[];
    magic_circles: CharacterClassMagicCircle[];
    thief_talents: CharacterClassThiefTalent[];
    user: User;

}
