import { Role } from './role';

export class User {
  id: number = null;
  name: string = '';
  email: string = '';
  login: string = '';
  role: Role;
  role_id: number;
  password: string = '';
  confirm: string = '';
}
