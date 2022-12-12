import { StatsItem } from '../StatsItem/StatsItem';
import css from './stats.module.css';
import PropTypes from 'prop-types';

export const Stats = ({ stats }) => {
  return (
    <ul className={css.stats}>
      <StatsItem text="Followers" stats={stats}>
        {stats.followers}
      </StatsItem>
      <StatsItem text="Views" stats={stats}>
        {stats.views}
      </StatsItem>
      <StatsItem text="Likes" stats={stats}>
        {stats.likes}
      </StatsItem>
    </ul>
  );
};

Stats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
