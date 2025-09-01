import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getFavoriteCards } from '../redux/selectors';
import Card from './Card/Card';

export default function Favorite() {
  const favs = useSelector(getFavoriteCards);

  // Jeśli nie ma ulubionych, przekieruj na stronę główną:
  if (!favs.length) return <Navigate to="/" replace />;

  return (
    <div className="container">
      <h2 style={{ margin: '16px 0 20px' }}>Favorite</h2>

      {/* Prosta lista bez dodatkowego SCSS */}
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 12 }}>
        {favs.map(card => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            isFavorite={card.isFavorite}
          >
            {card.desc}
          </Card>
        ))}
      </ul>
    </div>
  );
}
