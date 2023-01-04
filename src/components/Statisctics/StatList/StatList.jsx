import css from './StatList.module.css';
import PropTypes from 'prop-types';

export const StatList = ({ children }) => {
  return <ul className={css.statList}>{children}</ul>;
};

StatList.propTypes = { children: PropTypes.array.isRequired };
