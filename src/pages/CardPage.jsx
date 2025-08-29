import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCardById, selectColumnById } from '../redux/selectors';

export default function CardPage() {
  const { id } = useParams();

  const card = useSelector((state) => selectCardById(state, id));
  const column = useSelector((state) =>
    card ? selectColumnById(state, card.columnId) : null
  );

  if (!card) {
    return (
      <div className="container" style={{ paddingTop: 16 }}>
        <p><Link to="/">{'←'} Powrót</Link></p>
        <h2>Karta nie istnieje</h2>
      </div>
    );
  }

  return (
    <div className="container" style={{ paddingTop: 16 }}>
      <p>
        {column ? (
          <Link to={`/column/${column.id}`}>{'←'} Wróć do kolumny „{column.title}”</Link>
        ) : (
          <Link to="/">{'←'} Powrót</Link>
        )}
      </p>
      <h1>{card.title}</h1>
      <div style={{ marginTop: 12, opacity: 0.8 }}>
        <em>Tu w przyszłości opis karty…</em>
      </div>
    </div>
  );
}
