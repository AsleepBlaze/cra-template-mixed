import { renderHook } from '@testing-library/react';
import { useUserListService } from './service';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { UserRepository } from './repo';
import { User } from './model';
import { act } from '@testing-library/react';

jest.mock('./repo');
const mokedRepo = UserRepository.$ as jest.Mocked<typeof UserRepository.$>;

describe('user service', () => {
  test('user list', async () => {
    mokedRepo.index.mockResolvedValueOnce([
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
    ]);

    const { result } = await act(async () => {
      return renderHook(() => useUserListService(), {
        wrapper: ({ children }) => (
          <Provider store={store}>{children}</Provider>
        ),
      });
    });

    expect(result.current.users!.length).toBe(10);
    expect(result.current.username).toBeUndefined();

    async function* select() {
      let i = 0;
      while (i < result.current.users!.length) {
        await act(async () => {
          result.current.onSelect(result.current.users![i]);
        });
        yield ++i;
      }
    }

    for await (let index of select()) {
      expect(result.current.username).toBe(`Name${index}`);
    }
  });
});
