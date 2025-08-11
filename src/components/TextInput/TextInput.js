import styles from './TextInput.module.scss';
import PropTypes from 'prop-types';

const TextInput = ({ placeholder }) => (
  <input className={styles.input} type="text" placeholder={placeholder} />
);

TextInput.propTypes = {
  placeholder: PropTypes.string,
};

export default TextInput;
