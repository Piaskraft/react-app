import styles from './Card.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ id, title, children }) => (
  <article className={styles.card}>
    {title && (
      <h4 className={styles.title}>
        <Link to={`/card/${id}`} className={styles.linkPlain}>
          {title}
        </Link>
      </h4>
    )}
    {children && <p className={styles.desc}>{children}</p>}
  </article>
);

Card.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Card;
