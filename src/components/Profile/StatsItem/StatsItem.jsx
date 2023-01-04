import css from './statsItem.module.css';
import PropTypes from 'prop-types';

export const StatsItem = ({ text, children }) => {
  return (
    <li>
      <span className={css.label}>{text}</span>
      <span className={css.quantity}>{children}</span>
    </li>
  );
};

StatsItem.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.number.isRequired,
};
