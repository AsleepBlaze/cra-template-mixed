import { Props } from './UserList.types';
import './UserList.module.scss';
import UserCell from './UserCell';

export default function UserList({ users, username, onSelect }: Props) {
  return (
    <>
      <h2>User List{username && ` (${username})`}</h2>
      {users.map((user, index) => (
        <UserCell
          key={`user#${index}`}
          user={user}
          dark={index % 2 === 0}
          onSelect={onSelect}
        />
      ))}
    </>
  );
}
