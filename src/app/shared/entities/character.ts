import { Attributes } from "./attributes";
import { Alignment } from "./alignment";
import { CharacterClass } from "./character-class";
import { CharacterClassSpecialization } from "./character-class-specialization";
import { CharacterRace } from "./character-race";

export class Character {
  id: number;
  name: string;
  player: string;
  title?: string;
  level?: number;
  race?: CharacterRace;
  class?: CharacterClass;
  specialization?: CharacterClassSpecialization;
  alignment?: Alignment;
  picture: string = 'http://lorempixel.com/300/300/abstract/';
  description: string;
  attributes: Attributes;
}
