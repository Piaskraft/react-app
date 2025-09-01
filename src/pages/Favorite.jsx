import React from 'react';
import { useSelector } from 'react-redux';
// Jeśli wolisz redirect, odkomentuj poniżej i użyj <Navigate /> w sekcji "gdy pusto"
// import { Navigate } from 'react-router-dom';
import { getFavoriteCards } from '../redux/selectors';     // <- ścieżka z "pages" do selektorów
import Card from '../components/Card/Card';

export default function Favorite() {
  const favs = useSelector(getFavoriteCards);

  // Gdy nie ma ulubionych:
  if (!favs.length) {
    return (
      <div className="container">
        <h2 style={{ margin: '16px 0 20px' }}>Favorite</h2>
        <p>Brak ulubionych kart.</p>
        {/* Albo redirect:
          return <Navigate to="/" replace />;
        */}
      </div>
    );
  }

  // Lista ulubionych kart:
  return (
    <div className="container">
      <h2 style={{ margin: '16px 0 20px' }}>Favorite</h2>
      <ul style={{
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'grid',
        gap: 12
      }}>
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
