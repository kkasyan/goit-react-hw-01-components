import css from './profileImage.module.css';
import PropTypes from 'prop-types';
import user from '../../data/user';

export const ProfileImage = () => {
  return <img src={user.avatar} alt="User avatar" className={css.avatar} />;
};

ProfileImage.propTypes = {
  avatar: PropTypes.string.isRequired,
};
