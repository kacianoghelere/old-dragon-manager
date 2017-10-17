import { Character } from './character';
import { CampaignJournal } from './campaign-journal';
import { CampaignMap } from './campaign-map';
import { CampaignNote } from './campaign-note';
import { CampaignPage } from './campaign-page';
import { User } from './user';

export class Campaign {
  characters?: Character[];
  description: string;
  dm_only?: boolean = false;
  dungeonMaster?: User
  id?: number;
  journals?: CampaignJournal[];
  maps?: CampaignMap[];
  members?: User[];
  notes?: CampaignNote[];
  pages?: CampaignPage[];
  picture?: string;
  title: string;
  uuid?: string;
}
