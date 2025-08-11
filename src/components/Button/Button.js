import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = ({ children, variant, type = 'button', onClick }) => {
  const className = [styles.button, variant ? styles[variant] : ''].join(' ').trim();
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['danger', 'transparent']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
};

export default Button;
