import css from './statItem.module.css';

export const StatItems = ({ items }) => {
  return items.map(item => (
    <li className={css.item} key={item.id}>
      <span className={css.label} label={item.label}>
        {item.label}
      </span>
      <span className={css.percentage}>{item.percentage}%</span>
    </li>
  ));
};
