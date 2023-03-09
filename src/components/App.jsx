import { Profile } from 'components/profile/Profile';
import user from 'dataBase/user.json';
import { Statistics } from 'components/statistics/Statistics';
import data from 'dataBase/data.json';
import { FriendList } from 'components/friendList/FriendList';
import friends from 'dataBase/friends.json';
import { TransactionHistory } from 'components/transactionHistory/TransactionHistory';
import transactions from 'dataBase/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};
