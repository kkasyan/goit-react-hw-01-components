import css from './userName.module.css';
import user from '../../data/user';
import PropTypes from 'prop-types';

export const UserName = () => {
  return <p className={css.name}>{user.username}</p>;
};

UserName.propTypes = {
  username: PropTypes.string,
};
