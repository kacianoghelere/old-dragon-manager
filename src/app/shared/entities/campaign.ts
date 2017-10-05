import { Character } from './character';
import { CampaignJournal } from './campaign-journal';
import { CampaignMap } from './campaign-map';
import { CampaignNote } from './campaign-note';
import { CampaignWikiPage } from './campaign-wiki-page';
import { User } from './user';

export class Campaign {
  characters?: Character[];
  description: string;
  picture?: string;
  id?: number;
  journals?: CampaignJournal[];
  maps?: CampaignMap[];
  members?: User[];
  notes?: CampaignNote[];
  pages?: CampaignWikiPage[];
  title: string;
  dungeonMaster?: User
}
