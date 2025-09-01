import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import styles from './ColumnForm.module.scss';
import { addColumn } from '../../redux/store';



export default function ColumnForm({ listId }) {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const dispatch = useDispatch();

  const submit = () => {
  const t = title.trim();
  const i = (icon || 'book').trim();
  if (!t) return;

dispatch(addColumn({ title: t, icon: i, listId }));
  setTitle('');
  setIcon('');
};


  const onSubmit = (e) => {
    e.preventDefault();      // blokuj przeładowanie
    submit();                // wyślij akcję
  };

  const onChangeTitle = (eOrVal) =>
    setTitle(typeof eOrVal === 'string' ? eOrVal : eOrVal?.target?.value || '');
  const onChangeIcon = (eOrVal) =>
    setIcon(typeof eOrVal === 'string' ? eOrVal : eOrVal?.target?.value || '');

  return (
    <form className={styles.columnForm} onSubmit={onSubmit}>
      <TextInput placeholder="Title:" value={title} onChange={onChangeTitle} />
      <TextInput placeholder="Icon:" value={icon} onChange={onChangeIcon} />
      {/* WAŻNE: klik też wywołuje submit — niezależnie od typu Buttona */}
      <Button onClick={submit}>ADD COLUMN</Button>
    </form>
  );
}
