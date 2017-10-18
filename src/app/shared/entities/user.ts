import { CampaignInvitation } from './campaign-invitation';
import { Character } from './character';
import { Role } from './role';

export class User {
  avatar?: string = '';
  characters?: Character[];
  confirm?: string = '';
  email?: string = '';
  id: number = null;
  invitations?: CampaignInvitation[];
  name: string = '';
  password?: string = '';
  role_id?: number;
  role?: Role = {id: null, name: '', admin: false};
  user_code?: string = '';
}
