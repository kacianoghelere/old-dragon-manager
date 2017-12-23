import { SkillType } from './skill-type';

export interface Skill {
  id: number;
  name: string;
  description: string;
  type?: SkillType;
}
