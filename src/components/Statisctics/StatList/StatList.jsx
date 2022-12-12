import { StatItem } from '../StatItem/StatItem';
import css from './statList.module.css';
import PropTypes from 'prop-types';

export const StatList = ({ items }) => {
  return (
    <ul className={css.statList}>
      {items.map(({ id, label, percentage }) => (
        <StatItem key={id} label={label} percentage={percentage} />
      ))}
    </ul>
  );
};

// StatList.propTypes = {
//   items: PropTypes.shape({
//     label: PropTypes.string.isRequired,
//     percentage: PropTypes.number.isRequired,
//   }),
// };
