import styles from './Lists.module.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { getAllLists } from '../../redux/selectors';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { addList } from '../../redux/listsReducer';


export default function Lists() {
  const lists = useSelector(getAllLists);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const submit = () => {
    const t = title.trim();
    const d = description.trim();
    if (!t) return; // wymagany tylko title wg PDF
    dispatch(addList({ title: t, description: d }));
    setTitle('');
    setDescription('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  return (
    <section className={styles.lists}>
      <h2 className={styles.heading}>Browse lists</h2>

      {lists.map(list => (
        <Link
          key={list.id}
          to={`/list/${list.id}`}
          className={styles.listLink}
        >
          <h3>{list.title}</h3>
          <p>{list.description}</p>
        </Link>
      ))}

      {/* Formularz dodawania nowej listy */}
      <form onSubmit={onSubmit} style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 16 }}>
        <TextInput
          placeholder="Title:"
          value={title}
          onChange={(e) => setTitle(e?.target?.value || '')}
        />
        <TextInput
          placeholder="Description:"
          value={description}
          onChange={(e) => setDescription(e?.target?.value || '')}
        />
        <Button onClick={submit}>ADD LIST</Button>
      </form>
    </section>
  );
}
