import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import styles from './CardForm.module.scss';

export default function CardForm({ columnId }) {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const submit = () => {
    const t = title.trim();
    if (!t) return;

    // dokładnie jak w 16.3
    dispatch({ type: 'ADD_CARD', columnId, newCard: { title: t } });

    setTitle('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  const onChange = (eOrVal) =>
    setTitle(typeof eOrVal === 'string' ? eOrVal : eOrVal?.target?.value || '');

  return (
    <form className={styles.cardForm} onSubmit={onSubmit}>
      <TextInput placeholder="Nowa karta…" value={title} onChange={onChange} />
      <Button onClick={submit}>DODAJ KARTĘ</Button>
    </form>
  );
}
