import { Alignment } from './alignment';
import { CharacterClass } from './character-class';
import { CharacterSpecializationStage } from './character-specialization-stage';

export class CharacterSpecialization {
  alignment?: Alignment;
  class?: CharacterClass;
  description?: string;
  flat_name?: string;
  id?: number;
  min_level: number;
  name: string;
  picture?: string;
  stages?: CharacterSpecializationStage[] = [];
}
