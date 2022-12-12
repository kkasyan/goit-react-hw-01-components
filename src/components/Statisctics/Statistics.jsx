import css from './statistics.module.css';
import { Title } from './Title/Title';
import { StatList } from './StatList/StatList';

export const Statistics = ({ id, label, percentage }) => {
  return (
    <section className={css.statistics}>
      <Title text="Upload stats"></Title>
      <StatList key={id} />
    </section>
  );
};