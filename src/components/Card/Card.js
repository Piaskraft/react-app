import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

import { toggleCardFavorite, removeCard } from '../../redux/cardsReducer';
import styles from './Card.module.scss';

const Card = ({ id, title, children, isFavorite = false }) => {
  const dispatch = useDispatch();

  const onToggleFav = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(toggleCardFavorite(id));
  };

  const onRemove = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(removeCard(id));
  };

  return (
    <article className={styles.card} style={{ position: 'relative' }}>
      {/* Gwiazdka */}
      <button
        type="button"
        onClick={onToggleFav}
        aria-label={isFavorite ? 'Usuń z ulubionych' : 'Dodaj do ulubionych'}
        title={isFavorite ? 'Usuń z ulubionych' : 'Dodaj do ulubionych'}
        aria-pressed={isFavorite}
        style={{
          position: 'absolute',
          top: 8,
          right: 40,
          background: 'transparent',
          border: 0,
          cursor: 'pointer',
          opacity: isFavorite ? 1 : 0.6,
        }}
      >
        <FontAwesomeIcon icon={isFavorite ? faStarSolid : faStarRegular} />
      </button>

      {/* Kosz */}
      <button
        type="button"
        onClick={onRemove}
        aria-label="Usuń kartę"
        title="Usuń kartę"
        style={{
          position: 'absolute',
          top: 8,
          right: 8,
          background: 'transparent',
          border: 0,
          cursor: 'pointer',
          opacity: 0.7,
        }}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>

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
};

Card.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
  isFavorite: PropTypes.bool,
};

export default Card;
