import { PageCategory } from './page-category';

export class CampaignPage {
  body: string;
  campaign_id?: number;
  dm_only?: boolean = false;
  id?: number;
  title: string;
  picture?: string;
  flat_name?: string;
  page_category?: PageCategory;
}
