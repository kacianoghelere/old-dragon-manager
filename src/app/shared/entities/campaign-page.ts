import { PageCategory } from './page-category';

export interface CampaignPage {
  body: string;
  campaign_id?: number;
  dm_only?: boolean;
  id?: number;
  title: string;
  picture?: string;
  flat_name?: string;
  page_category?: PageCategory;
}
