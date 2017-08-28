import { User } from './user';

export class Campaign {
  characters: any[] = [];
  description: string;
  id: number;
  journals: any[] = [];
  notes: any[] = [];
  title: string;
  user: User
}
