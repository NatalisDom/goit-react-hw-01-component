import { FriendListItem } from 'components/friendListItem/FriendListItem';
import css from 'components/friendList/FriendList.module.css';
import friends from 'dataBase/friends.json';

export const FriendList = () => {
  return (
    <ul className={css.friendList}>
      <FriendListItem array={friends} />
    </ul>
  );
};
