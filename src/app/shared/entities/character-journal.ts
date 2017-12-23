import { Alignment } from "./alignment";

export interface CharacterJournal {
  id?: number;
  current_level: number;
  current_exp?: number;
  alignment?: Alignment;
  strength?: number;
  dexterity?: number;
  constitution?: number;
  intelligence?: number;
  wisdom?: number;
  charisma?: number;
}
