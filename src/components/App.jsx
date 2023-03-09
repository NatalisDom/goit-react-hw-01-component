import { Profile } from 'components/profile/Profile';
import user from 'dataBase/user.json';
import { Statistics } from 'components/statistics/Statistics';
import data from 'dataBase/data.json'

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
    </>
  );
};