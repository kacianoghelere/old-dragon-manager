import { Attributes } from "./attributes";
import { CharacterClass } from "./character-class";
import { CharacterClassSpecialization } from "./character-class-specialization";
import { CharacterRace } from "./character-race";

export class Character {
  id: number;
  name: string;
  player: string;
  race?: CharacterRace;
  class?: CharacterClass;
  specialization?: CharacterClassSpecialization;
  picture: string = 'http://lorempixel.com/300/300/abstract/';
  description: string;
  attributes: Attributes;
}
