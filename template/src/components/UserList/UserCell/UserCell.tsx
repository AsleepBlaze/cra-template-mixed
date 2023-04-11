import { Props } from './UserCell.types';
import styles from './UserCell.module.scss';

export default function UserCell({ user, dark = false, onSelect }: Props) {
  return (
    <section
      className={dark ? styles.dark : undefined}
      onClick={() => onSelect(user)}
    >
      <h3>{user.name}</h3>
      <p>{user.profile}</p>
    </section>
  );
}
