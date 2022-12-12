import { Description } from './Description/Description';
import { Stats } from './Stats/Stats';
import css from './profile.module.css';

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
