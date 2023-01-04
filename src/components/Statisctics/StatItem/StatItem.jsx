import css from './statItem.module.css';

export const StatItem = ({ id, label, percentage }) => {
  return (
    <li className={css.item} key={id}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};
