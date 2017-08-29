import { Character } from './character';
import { CampaignJournal } from './campaign-journal';
import { CampaignNote } from './campaign-note';
import { User } from './user';

export class Campaign {
  characters?: Character[];
  description: string;
  id?: number;
  journals?: CampaignJournal[];
  notes?: CampaignNote[];
  title: string;
  user: User
}
