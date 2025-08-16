import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/cardsReducer';

import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import styles from './CardForm.module.scss';

export default function CardForm({ columnId }) {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const onChange = (eOrValue) => {
    setTitle(typeof eOrValue === 'string' ? eOrValue : eOrValue?.target?.value || '');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const t = title.trim();
    if (!t) return;
    dispatch(addCard({ columnId, title: t }));
    setTitle('');
  };

  return (
    <form className={styles.cardForm} onSubmit={onSubmit}>
      <TextInput placeholder="Nowa karta…" value={title} onChange={onChange} />
      <Button>Dodaj kartę</Button>
    </form>
  );
}
