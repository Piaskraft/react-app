import React from 'react';
import styles from './Column.module.scss';            // zostaw swój import
import Card from '../Card/Card';                      // zostaw ścieżkę jak u Ciebie
import CardForm from '../CardForm/CardForm';          // j.w.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { getFilteredCardsForColumn } from '../../redux/selectors';

const Column = ({ id, title, icon }) => {
  const cards = useSelector(state => getFilteredCardsForColumn(state, id));

  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        {icon && <span className={styles.icon}><FontAwesomeIcon icon={icon} /></span>}
        {title}
      </h2>

      <ul className={styles.cards}>
        {cards.map(card => (
          <Card key={card.id} title={card.title}>
            {card.desc}
          </Card>
        ))}
      </ul>

      {/* Twój formularz dodawania kart – dostaje columnId */}
      <CardForm columnId={id} />
    </article>
  );
};

export default Column;
