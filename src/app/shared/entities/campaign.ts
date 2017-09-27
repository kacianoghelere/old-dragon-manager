import { Character } from './character';
import { CampaignJournal } from './campaign-journal';
import { CampaignNote } from './campaign-note';
import { User } from './user';

export class Campaign {
  characters?: Character[];
  description: string;
  picture?: string;
  id?: number;
  journals?: CampaignJournal[];
  members?: User[];
  notes?: CampaignNote[];
  title: string;
  dungeonMaster?: User
}
