import { CampaignInvitation } from './campaign-invitation';
import { Character } from './character';
import { Role } from './role';

export class User {
  avatar?: string;
  characters?: Character[];
  confirm?: string;
  email?: string;
  id: number;
  invitations?: CampaignInvitation[];
  name: string;
  password?: string;
  role_id?: number;
  role?: Role;
  user_code?: string;
}
