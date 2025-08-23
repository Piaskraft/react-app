import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import styles from './CardForm.module.scss';
 import { addCard } from '../../redux/store';


export default function CardForm({ columnId }) {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();                        // ← blokuje przeładowanie
    const t = title.trim();
    if (!t) return;
   dispatch(addCard({ columnId, title: t }));
    setTitle('');
  };

  const onChange = (eOrVal) =>
    setTitle(typeof eOrVal === 'string' ? eOrVal : eOrVal?.target?.value || '');

  return (
    <form className={styles.cardForm} onSubmit={onSubmit}>
      <TextInput placeholder="Nowa karta…" value={title} onChange={onChange} />
    <Button type="submit">ADD COLUMN</Button>

    </form>
  );
}
