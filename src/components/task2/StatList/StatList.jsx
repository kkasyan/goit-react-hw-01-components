import { StatItems } from '../StatItem/StatItems';
import css from './statList.module.css';
import data from '../../data/data';
import PropTypes from 'prop-types';

export const StatList = () => {
  return (
    <ul className={css.statList}>
      <StatItems items={data} />
    </ul>
  );
};

StatList.propTypes = {
  items: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
