import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserRepository } from './repo';
import { User } from './model';
import { State } from '../../redux/store';
import { rename } from '../../redux/actions';

export function useUserListService() {
  const repo = useContext(UserRepository.Context);
  const [users, setUsers] = useState<User[]>();
  const username = useSelector(({ root: { username } }: State) => username);
  const dispatch = useDispatch();

  useEffect(() => {
    repo
      .index()
      .then(setUsers)
      .catch(() =>
        setUsers([
          new User(1, 'Name1', 'Profile1'),
          new User(2, 'Name2', 'Profile2'),
          new User(3, 'Name3', 'Profile3'),
          new User(4, 'Name4', 'Profile4'),
          new User(5, 'Name5', 'Profile5'),
          new User(6, 'Name6', 'Profile6'),
          new User(7, 'Name7', 'Profile7'),
          new User(8, 'Name8', 'Profile8'),
          new User(9, 'Name9', 'Profile9'),
          new User(10, 'Name10', 'Profile10'),
        ]),
      );
  }, [repo]);

  const onSelect = (user: User) => dispatch(rename(user.name));

  return { users, username, onSelect };
}
