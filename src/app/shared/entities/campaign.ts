import { Character } from './character';
import { User } from './user';

export class Campaign {
  characters?: Character[];
  description: string;
  id: number;
  journals?: any[];
  notes?: any[];
  title: string;
  user: User
}
