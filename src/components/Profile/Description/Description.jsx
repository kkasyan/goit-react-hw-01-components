import css from './Description.module.css';

import {
  UserDetails,
  UserName,
  ProfileImage,
} from '../UserDetails/UserDetails';

export const Description = ({ avatar, username, tag, location }) => {
  return (
    <div className={css.description}>
      <ProfileImage avatar={avatar} />
      <UserName username={username} />
      <UserDetails tag={tag} location={location} />
    </div>
  );
};
