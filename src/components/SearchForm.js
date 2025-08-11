import styles from './SearchForm.module.scss';
import TextInput from './TextInput/TextInput';
import Button from './Button/Button';

const SearchForm = () => (
  <form className={styles.searchForm}>
    <TextInput placeholder="Search..." />
    <Button type="submit">Search</Button>
    {/* Test wariantu (możesz potem usunąć): */}
    {/* <Button variant="danger">Remove</Button> */}
  </form>
);

export default SearchForm;
