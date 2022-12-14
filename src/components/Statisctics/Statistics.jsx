import css from './statistics.module.css';
import PropTypes from 'prop-types';

import { Title } from './Title/Title';
import { StatList } from './StatList/StatList';
import { StatItem } from './StatItem/StatItem';

export const Statistics = ({ items }) => {
  return (
    <section className={css.statistics}>
      <Title text="Upload stats" />
      <StatList>
        {items.map(({ id, label, percentage }) => (
          <StatItem key={id} label={label} percentage={percentage} />
        ))}
      </StatList>
    </section>
  );
};

StatItem.propTypes = {
  items: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
