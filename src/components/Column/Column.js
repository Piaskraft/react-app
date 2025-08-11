import styles from './Column.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';           // ⬅️ nowy import

const Column = ({ id, title, icon, cards = [], addCard }) => {   // ⬅️ dodany prop addCard
  return (
    <section className={styles.column}>
      <h3 className={styles.title}>
        {icon && <FontAwesomeIcon icon={icon} className={styles.icon} />}
        {title}
      </h3>

      <div className={styles.body}>
        {cards.map(card => (
          <Card key={card.id} title={card.title} />
        ))}
      </div>

      {/* formularz dodawania karty do TEJ kolumny */}
      <CardForm columnId={id} action={addCard} />
    </section>
  );
};

export default Column;
