import { StatsItem } from '../StatsItem/StatsItem';
import css from './stats.module.css';
import user from '../../data/user';
import PropTypes from 'prop-types';

export const Stats = () => {
  return (
    <ul className={css.stats}>
      <StatsItem text="Followers" stats={user.stats}>
        {user.stats.followers}
      </StatsItem>
      <StatsItem text="Views" stats={user.stats}>
        {user.stats.views}
      </StatsItem>
      <StatsItem text="Likes" stats={user.stats}>
        {user.stats.likes}
      </StatsItem>
    </ul>
  );
};

Stats.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ),
};
