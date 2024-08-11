import styles from './FriendListItem.module.css';
import clsx from 'clsx';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const status = clsx(styles.status, isOnline ? styles.online : styles.offline);
  return (
    <div className={styles.item}>
      <img className={styles.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={styles.name}>{name}</p>
      <p className={status}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};

export default FriendListItem;
