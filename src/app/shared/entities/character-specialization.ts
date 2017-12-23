import { Alignment } from './alignment';
import { CharacterClass } from './character-class';
import { CharacterSpecializationStage } from './character-specialization-stage';
import { User } from './user';

export interface CharacterSpecialization {
  alignment?: Alignment;
  character_class?: CharacterClass;
  description?: string;
  flat_name?: string;
  id?: number;
  min_level: number;
  name: string;
  picture?: string;
  short_description?: string;
  stages?: CharacterSpecializationStage[];
  user?: User;
}
