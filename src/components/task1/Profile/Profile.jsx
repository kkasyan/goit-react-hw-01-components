import { Description } from '../Description/Description';
import { Stats } from '../Stats/Stats';
import css from './profile.module.css';

export const Profile = () => {
  return (
    <div className={css.profile}>
      <Description />
      <Stats />
    </div>
  );
};
