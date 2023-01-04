import css from './title.module.css';
import PropTypes from 'prop-types';

export const Title = ({ text }) => {
  if (Title) {
    return <h2 className={css.title}>{text}</h2>;
  }
};

Title.propTypes = {
  title: PropTypes.string,
};
