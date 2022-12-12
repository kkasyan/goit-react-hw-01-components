import {
  UserDetails,
  UserName,
  ProfileImage,
} from '../UserDetails/UserDetails';

import css from './description.module.css';

export const Description = ({ avatar, username, tag, location }) => {
  return (
    <div className={css.description}>
      <ProfileImage avatar={avatar} />
      <UserName username={username} />
      <UserDetails tag={tag} location={location} />
    </div>
  );
};
