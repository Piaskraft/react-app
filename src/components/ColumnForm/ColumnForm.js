import { useState } from 'react';
import styles from './ColumnForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const ColumnForm = ({ action }) => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    action({ title: title.trim(), icon: icon.trim() || 'book' });
    setTitle('');
    setIcon('');
  };

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <TextInput
        className={styles.input}
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <TextInput
        className={styles.input}
        placeholder="Icon (book / film / gamepad)"
        value={icon}
        onChange={e => setIcon(e.target.value)}
      />
      <Button type="submit">Add column</Button>
    </form>
  );
};

ColumnForm.propTypes = {
  action: PropTypes.func.isRequired,
};

export default ColumnForm;
