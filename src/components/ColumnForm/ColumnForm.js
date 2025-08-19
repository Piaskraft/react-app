import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsReducer';

import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import styles from './ColumnForm.module.scss';

export default function ColumnForm() {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState(''); // <= NOWE
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const t = title.trim();
    const i = (icon || 'book').trim();  // domyślnie 'book', jak w Kodilli
    if (!t) return;
    dispatch(addColumn({ title: t, icon: i }));
    setTitle('');
    setIcon('');
  };

  return (
    <form className={styles.columnForm} onSubmit={onSubmit}>
      {/* Title */}
      <TextInput
        placeholder="Title:"
        value={title}
        onChange={(e) => setTitle(typeof e === 'string' ? e : e?.target?.value || '')}
      />
      {/* Icon (book / film / gamepad / music) */}
      <TextInput
        placeholder="Icon:"
        value={icon}
        onChange={(e) => setIcon(typeof e === 'string' ? e : e?.target?.value || '')}
      />
      <Button>ADD COLUMN</Button>
    </form>
  );
}
