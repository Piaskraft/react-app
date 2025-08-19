import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import styles from './CardForm.module.scss';

export default function CardForm({ columnId }) {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();                        // ← blokuje przeładowanie
    const t = title.trim();
    if (!t) return;
    dispatch({ type: 'ADD_CARD', columnId, newCard: { title: t } });
    setTitle('');
  };

  const onChange = (eOrVal) =>
    setTitle(typeof eOrVal === 'string' ? eOrVal : eOrVal?.target?.value || '');

  return (
    <form className={styles.cardForm} onSubmit={onSubmit}>
      <TextInput placeholder="Nowa karta…" value={title} onChange={onChange} />
      <Button type="submit">DODAJ KARTĘ</Button> {/* ← tylko submit, bez onClick */}
    </form>
  );
}
