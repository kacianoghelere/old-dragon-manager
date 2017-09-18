import { Campaign } from './campaign';
import { User } from './user';

export class CampaignInvitation {
  id?: number;
  message: string;
  campaign: Campaign;
  user: User
}
