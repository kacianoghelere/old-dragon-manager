import { Attributes } from "./attributes";
import { CharacterClass } from "./character-class";
import { CharacterClassSpecialization } from "./character-class-specialization";
import { CharacterJournal } from "./character-journal";
import { CharacterRace } from "./character-race";
import { User } from "./user";

export class Character {
  id: number;
  name: string;
  title?: string;
  quote?: string;
  level?: number;
  race?: CharacterRace;
  class?: CharacterClass;
  specialization?: CharacterClassSpecialization;
  status?: CharacterJournal;
  picture?: string = 'http://lorempixel.com/300/300/abstract/';
  description: string;
  player?: User;
}
