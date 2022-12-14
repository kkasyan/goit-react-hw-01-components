import css from './statList.module.css';

export const StatList = ({ children }) => {
  return <ul className={css.statList}>{children}</ul>;
};
