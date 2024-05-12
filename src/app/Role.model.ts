import { User } from './User.model';

export interface Role {
  roleId: number;
  roleTitle: String;
  roleDesc: String;

  user?: User;
}
