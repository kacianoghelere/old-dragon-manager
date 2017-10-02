import { User } from './user';

export class CampaignJournal {
  id?: number;
  description: string;
  cover_image?: string;
  idactive?: boolean;
  _delete?: boolean = false;
}
