import styles from './List.module.scss';
import Column from './Column/Column';
import ColumnForm from './ColumnForm/ColumnForm';
import SearchForm from './SearchForm';
import { faBook, faFilm, faGamepad, faMusic } from '@fortawesome/free-solid-svg-icons';

import { useSelector, useDispatch } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getListById, getColumnsByList } from '../redux/selectors';
import { updateSearchString } from '../redux/searchStringReducer';


const iconMap = { book: faBook, film: faFilm, gamepad: faGamepad, music: faMusic };

export default function List() {
  // 1) hooki ZAWSZE na górze
  const { listId } = useParams();
  const dispatch = useDispatch();

  // 2) efekt resetujący filtr – zawsze się wykona
  useEffect(() => {
    dispatch(updateSearchString(''));
  }, [dispatch, listId]);

  // 3) selektory (też hooki) – zawsze wywołane
  const listData = useSelector((state) => getListById(state, listId));
  const columns  = useSelector((state) => getColumnsByList(state, listId));

  // 4) dopiero TERAZ warunkowy return
  if (!listData) return <Navigate to="/" />;

  return (
    <section className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>{listData.title}</h2>
      </header>

      <p className={styles.description}>{listData.description}</p>

      <div style={{ display: 'flex', justifyContent: 'center', margin: '12px 0 8px' }}>
        <SearchForm />
      </div>

      <section className={styles.columns}>
        {columns.map((col) => (
          <Column
            key={col.id}
            id={col.id}
            title={col.title}
            icon={iconMap[col.icon] || iconMap.book}
          />
        ))}
      </section>

      <ColumnForm listId={listId} />
    </section>
  );
}
