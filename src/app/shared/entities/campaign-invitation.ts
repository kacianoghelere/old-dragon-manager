import { Campaign } from './campaign';
import { Character } from './character';

export class CampaignInvitation {
  id?: number;
  message: string;
  campaign: Campaign;
  character_id?: number;
  completed?: boolean;
  accepted?: boolean;
  denied?: boolean;
}
