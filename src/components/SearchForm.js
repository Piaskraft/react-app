import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSearchString } from '../redux/selectors';
import { setSearchString } from '../redux/searchStringReducer';

import TextInput from './TextInput/TextInput';           // ← stylowany input
import styles from './SearchForm.module.scss';           // ← jeśli masz moduł SCSS

export default function SearchForm() {
  const value = useSelector(getSearchString);
  const dispatch = useDispatch();

  const onChange = (eOrValue) => {
    const v = typeof eOrValue === 'string' ? eOrValue : eOrValue?.target?.value || '';
    dispatch(setSearchString(v));
  };

  return (
    <form className={styles.search} onSubmit={(e) => e.preventDefault()}>
      <TextInput placeholder="Search…" value={value} onChange={onChange} />
    </form>
  );
}
