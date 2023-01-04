import css from './Profile.module.css';

import { Description } from './Description/Description';
import { Stats } from './Stats/Stats';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <Description
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <Stats stats={stats} />
    </div>
  );
};
