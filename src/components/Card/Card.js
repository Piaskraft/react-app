import styles from './Card.module.scss';
import PropTypes from 'prop-types';

const Card = ({ title, children }) => (
  <article className={styles.card}>
    {title && <h4 className={styles.title}>{title}</h4>}
    <p className={styles.desc}>{children}</p>
  </article>
);

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Card;
