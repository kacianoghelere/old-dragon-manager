import { User } from './user';

export class CampaignNote {
  id?: number;
  description: string;
  dm_only: boolean;
  _delete?: boolean = false;
}
