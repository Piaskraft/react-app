import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import TextInput from './TextInput/TextInput';
import Button from './Button/Button';
import styles from './SearchForm.module.scss';

export default function SearchForm() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_SEARCHSTRING', payload: query });
    setQuery(''); // czyścimy input po kliknięciu lupy
  };

  const onChange = (eOrVal) =>
    setQuery(typeof eOrVal === 'string' ? eOrVal : eOrVal?.target?.value || '');

  const clearFilter = () => {
    setQuery('');
    dispatch({ type: 'UPDATE_SEARCHSTRING', payload: '' });
  };

  const onKeyDown = (e) => {
    if (e.key === 'Escape') clearFilter();   // Esc = szybki reset
  };

  
return (
    <form className={styles.search} onSubmit={onSubmit}>
      <TextInput
        placeholder="Search…"
        value={query}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <Button type="submit" aria-label="Szukaj">🔎</Button>
      <Button
        type="button"                 // ważne: nie wysyła submitu
        variant="transparent"
        onClick={clearFilter}
        aria-label="Wyczyść filtr"
      >
        ✕
      </Button>
    </form>
  );
}