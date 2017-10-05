import { WikiCategory } from './wiki-category';

export class CampaignWikiPage {
  body: string;
  campaign_id?: number;
  dm_only?: boolean = false;
  id?: number;
  title: string;
  picture?: string;
  wiki_name?: string;
  wiki_category?: WikiCategory;
}
