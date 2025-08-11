import styles from './List.module.scss';
import Column from './Column/Column';
import Card from './Card/Card';
import { columns } from '../data/columns';
import { faBook, faFilm, faGamepad } from '@fortawesome/free-solid-svg-icons';

const iconMap = { book: faBook, film: faFilm, gamepad: faGamepad };

const List = () => {
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
          <Column key={col.id} title={col.title} icon={iconMap[col.icon]}>
            {col.cards.map(card => (
              <Card key={card.id} title={card.title}>
                {card.desc}
              </Card>
            ))}
          </Column>
        ))}
      </section>
    </section>
  );
};

export default List;
