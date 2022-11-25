import css from './statsItem.module.css';

export const StatsItem = ({ text, children }) => {
  return (
    <li>
      <span className={css.label}>{text}</span>
      <span className={css.quantity}>{children}</span>
    </li>
  );
};
