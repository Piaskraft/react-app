import styles from './SearchForm.module.scss';

const SearchForm = () => (
  <form className={styles.searchForm}>
    <input className={styles.input} type="text" />
    <button className={styles.button}>Search</button>
  </form>
);

export default SearchForm;
