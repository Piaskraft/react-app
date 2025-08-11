import styles from './TextInput.module.scss';
import PropTypes from 'prop-types';

const TextInput = ({ className = '', ...props }) => (
  <input className={`${styles.input} ${className}`} type="text" {...props} />
);

TextInput.propTypes = {
  placeholder: PropTypes.string,
};

export default TextInput;
