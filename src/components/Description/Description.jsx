/* import PropTypes from 'prop-types';
import clsx from 'clsx'; */
import css from './Description.module.css';

function Description({ children }) {
  return <div className={css.descr}>{children}</div>;
}
/* Description.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}; */

export default Description;
