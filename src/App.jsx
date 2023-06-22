import user from './data/user.json';
import {Profile} from './components/Profile/Profile';
import data from './data/data.json';
import { Statistic } from 'components/Statistic/Statistic';
import friends from './data/friends.json';
import { FriendsList } from 'components/Friendslist/FriendList';
import transactions from './data/transactions.json';
import { Transactions } from 'components/Transactions/Transactions';


export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistic title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <Transactions items={transactions} />
    </>
  );
};