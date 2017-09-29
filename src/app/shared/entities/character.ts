import { Attributes } from "./attributes";
import { Campaign } from "./campaign";
import { CharacterClass } from "./character-class";
import { CharacterClassSpecialization } from "./character-class-specialization";
import { CharacterJournal } from "./character-journal";
import { CharacterRace } from "./character-race";
import { User } from "./user";

export class Character {
  campaigns?: Campaign[];
  class?: CharacterClass;
  description: string;
  id: number;
  level?: number;
  name: string;
  picture?: string;
  player?: User;
  quote?: string;
  race?: CharacterRace;
  specialization?: CharacterClassSpecialization;
  status?: CharacterJournal;
  title?: string;
}
