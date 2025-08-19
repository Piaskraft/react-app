import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../../redux/todosReducer';
import Button from '../Button/Button'; // jeśli nie masz, użyj zwykłego <button>

export default function TodosPanel() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((s) => s.todos);

  const isLoading = status === 'loading';
  const isError = status === 'failed';
  const isDone = status === 'succeeded';

  return (
    <div style={{ margin: '24px 0' }}>
      <Button
        onClick={() => dispatch(fetchTodos())}
        disabled={isLoading}
        aria-busy={isLoading}
      >
        {isLoading ? 'Ładowanie…' : 'Pobierz przykładowe TODO'}
      </Button>

      {isError && (
        <p style={{ color: 'tomato', marginTop: 12 }}>
          Błąd: {error}
        </p>
      )}

      {isDone && (
        <ul style={{ marginTop: 12 }}>
          {items.map((t) => (
            <li key={t.id}>{t.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
