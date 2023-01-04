import css from './statList.module.css';
import PropTypes from 'prop-types';

export const StatList = ({ children }) => {
  return <ul className={css.statList}>{children}</ul>;
};

StatList.propTypes = { children: PropTypes.array.isRequired };
