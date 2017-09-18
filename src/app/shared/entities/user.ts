import { Role } from './role';

export class User {
  id: number = null;
  name: string = '';
  email: string = '';
  user_code: string = '';
  role: Role = {id: null, name: '', admin: false};
  role_id: number;
  password?: string = '';
  confirm?: string = '';
}
