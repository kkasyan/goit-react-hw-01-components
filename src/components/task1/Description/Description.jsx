import { ProfileImage } from '../ProfileImage/ProfileImage';
import { UserDetails } from '../UserDetails/UserDetails';
import { UserName } from '../UserName/UserName';
import css from './description.module.css';
import user from '../../data/user';

export const Description = () => {
  return (
    <div className={css.description}>
      <ProfileImage avatar={user.avatar} />
      <UserName username={user.username} />
      <UserDetails tag={user.tag} location={user.location} />
    </div>
  );
};
