import { SkillType } from './skill-type';

export class Skill {
  id: number;
  name: string;
  description: string;
  type?: SkillType;
}
