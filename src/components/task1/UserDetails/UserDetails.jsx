import css from './userDetails.module.css';
import PropTypes from 'prop-types';

export const UserDetails = ({ tag, location }) => {
  return (
    <>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </>
  );
};

UserDetails.propTypes = {
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
