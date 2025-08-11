import { useState } from 'react';
import styles from './CardForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const CardForm = ({ action, columnId }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const t = title.trim();
    if (!t) return;
    action({ title: t }, columnId); // wywołujemy akcję z rodzica
    setTitle('');
  };

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <TextInput placeholder="Card title" value={title} onChange={e => setTitle(e.target.value)} />
      <Button type="submit">Add card</Button>
    </form>
  );
};

export default CardForm;
