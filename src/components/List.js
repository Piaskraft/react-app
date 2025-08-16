import styles from './List.module.scss';
import Column from './Column/Column';
import ColumnForm from './ColumnForm/ColumnForm';
import { faBook, faFilm, faGamepad, faMusic } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { getAllColumns } from '../redux/selectors';

const iconMap = { book: faBook, film: faFilm, gamepad: faGamepad, music: faMusic };

const List = () => {
  const columns = useSelector(getAllColumns);

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
            icon={iconMap[col.icon] || iconMap.book}  // fallback jak brak ikony
          />
        ))}
      </section>

      {/* UWAGA: ColumnForm już dispatchuje do Reduxa (bez propsów) */}
      <ColumnForm />
    </section>
  );
};

export default List;
