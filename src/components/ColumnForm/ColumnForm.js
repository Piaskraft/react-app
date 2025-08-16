import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsReducer';

import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import styles from './ColumnForm.module.scss';

export default function ColumnForm() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const onChange = (eOrValue) => {
    setTitle(typeof eOrValue === 'string' ? eOrValue : eOrValue?.target?.value || '');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const t = title.trim();
    if (!t) return;
    dispatch(addColumn({ title: t })); // ikona domyślnie 'book'
    setTitle('');
  };

  return (
    <form className={styles.columnForm} onSubmit={onSubmit}>
      <TextInput placeholder="Nowa kolumna…" value={title} onChange={onChange} />
      <Button>Dodaj kolumnę</Button>
    </form>
  );
}
