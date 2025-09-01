import React from 'react';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/selectors';

export default function FavoriteBadge({ style, className }) {
  const count = useSelector(state => getFavoriteCards(state).length);
  if (!count) return null;

  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 18,
        height: 18,
        padding: '0 6px',
        marginLeft: 6,
        borderRadius: 10,
        fontSize: 12,
        lineHeight: '18px',
        background: '#ffcc00',
        color: '#000',
        fontWeight: 700,
        ...style,
      }}
      aria-label={`Liczba ulubionych: ${count}`}
    >
      {count}
    </span>
  );
}
