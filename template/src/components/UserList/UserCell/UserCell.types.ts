import { User } from '../../../modules/user/model';

export interface Props {
  user: User;
  dark?: boolean;
  onSelect: (user: User) => void;
}
