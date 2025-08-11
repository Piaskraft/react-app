import styles from './Column.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const Column = ({ title, icon, children }) => (
  <section className={styles.column}>
    <h3 className={styles.title}>
      {icon && <FontAwesomeIcon icon={icon} className={styles.icon} />}
      {title}
    </h3>
    <div className={styles.body}>{children}</div>
  </section>
);

Column.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object,     // obiekt ikony FA
  children: PropTypes.node,
};

export default Column;
