import css from './Description.module.css';

function Description({ children }) {
  return <div className={css.descr}>{children}</div>;
}

export default Description;
