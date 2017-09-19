import { Campaign } from './campaign';

export class CampaignInvitation {
  id?: number;
  message: string;
  campaign: Campaign;
  completed?: boolean;
  accepted?: boolean;
  denied?: boolean;
}
