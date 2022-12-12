import css from './userDetails.module.css';
import PropTypes from 'prop-types';

export const ProfileImage = ({ avatar }) => {
  return <img src={avatar} alt="User avatar" className={css.avatar} />;
};

export const UserDetails = ({ tag, location }) => {
  return (
    <>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </>
  );
};

export const UserName = ({ username }) => {
  return <p className={css.name}>{username}</p>;
};

UserDetails.propTypes = {
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

UserName.propTypes = {
  username: PropTypes.string.isRequired,
};

ProfileImage.propTypes = {
  avatar: PropTypes.string.isRequired,
};
