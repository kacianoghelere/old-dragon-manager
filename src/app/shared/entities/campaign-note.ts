import { User } from './user';

export interface CampaignNote {
  id?: number;
  description: string;
  dm_only: boolean;
  active?: boolean;
}
