import { Campaign } from "./campaign";
import { CharacterAttribute } from "./character-attribute";
import { CharacterClass } from "./character-class";
import { CharacterSpecialization } from "./character-specialization";
import { CharacterJournal } from "./character-journal";
import { CharacterRace } from "./character-race";
import { User } from "./user";

export class Character {
  campaigns?: Campaign[];
  class?: CharacterClass;
  description?: string;
  flat_name?: string;
  id: number;
  level?: number;
  name: string;
  picture?: string;
  player?: User;
  quote?: string;
  race?: CharacterRace;
  specialization?: CharacterSpecialization;
  status?: CharacterJournal;
  attributes?: CharacterAttribute;
  title?: string;
  uuid?: string;
}
