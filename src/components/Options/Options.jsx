/* import PropTypes from 'prop-types';
import clsx from 'clsx'; */
import css from './Options.module.css';

function Options({ children }) {
  return <div className={css.blockBtn}>{children}</div>;
}
/* Options.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}; */

export default Options;
