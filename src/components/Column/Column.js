import React from 'react';
import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { getFilteredCardsForColumn } from '../../redux/selectors';
import { Link } from 'react-router-dom';


const Column = ({ id, title, icon }) => {
  const cards = useSelector(state => getFilteredCardsForColumn(state, id));


  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        {icon && (
          <span className={styles.icon}>
            <FontAwesomeIcon icon={icon} />
          </span>
        )}
        <Link to={`/column/${id}`} className={styles.linkPlain}>
          {title}
        </Link>
      </h2>


      <ul className={styles.cards}>
        {cards.map(card => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            isFavorite={card.isFavorite}>
            {card.desc}
          </Card>
        ))}
      </ul>

      <CardForm columnId={id} />
    </article>
  );
};

export default Column;
