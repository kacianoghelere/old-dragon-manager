import { CampaignPage } from './campaign-page';

export interface PageCategory {
  id?: number;
  title: string;
  flat_name?: string;
  pages?: CampaignPage[];
}
