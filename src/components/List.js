import { useState } from 'react';
import styles from './List.module.scss';
import Column from './Column/Column';
import Card from './Card/Card';
import ColumnForm from './ColumnForm/ColumnForm';
import { columns as initialColumns } from '../data/columns';
import { faBook, faFilm, faGamepad, faMusic } from '@fortawesome/free-solid-svg-icons';

const iconMap = { book: faBook, film: faFilm, gamepad: faGamepad, music: faMusic };

const List = () => {
  const [columns, setColumns] = useState(initialColumns);

  // dodawanie kolumny (z 14.6)
  const addColumn = ({ title, icon }) => {
    const id = (crypto.randomUUID && crypto.randomUUID()) || String(Date.now());
    const iconKey = icon && iconMap[icon] ? icon : 'book';
    setColumns(prev => [...prev, { id, title, icon: iconKey, cards: [] }]);
  };

  // NOWE: dodawanie karty do konkretnej kolumny (14.7)
  const addCard = (newCard, columnId) => {
    setColumns(prev =>
      prev.map(col =>
        col.id === columnId
          ? {
              ...col,
              cards: [
                ...col.cards,
                { id: (crypto.randomUUID && crypto.randomUUID()) || String(Date.now()), title: newCard.title },
              ],
            }
          : col
      )
    );
  };

  return (
    <section className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          Things to do <span>soon</span>
        </h2>
      </header>

      <p className={styles.description}>Interesting things I need to check</p>

      <section className={styles.columns}>
        {columns.map(col => (
          <Column
            key={col.id}
            id={col.id}
            title={col.title}
            icon={iconMap[col.icon]}
            cards={col.cards}     // przekazujemy karty
            addCard={addCard}     // i akcję do dodawania kart
          >
            {/* Na razie wciąż renderujemy karty jako children.
                W następnym kroku przeniesiemy to do Column.js */}
            {col.cards.map(card => (
              <Card key={card.id} title={card.title}>
                {card.desc}
              </Card>
            ))}
          </Column>
        ))}
      </section>

      <ColumnForm action={addColumn} />
    </section>
  );
};

export default List;
