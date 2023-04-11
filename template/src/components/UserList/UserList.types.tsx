import { User } from '../../modules/user/model';

export interface Props {
  users: User[];
  username?: string;
  onSelect: (user: User) => void;
}
