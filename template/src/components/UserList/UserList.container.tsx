import { useUserListService } from '../../modules/user/service';
import UserList from './UserList';

export default function UserListContainer() {
  const { users, username, onSelect } = useUserListService();

  if (!users) {
    return <></>;
  }

  return <UserList users={users} username={username} onSelect={onSelect} />;
}
