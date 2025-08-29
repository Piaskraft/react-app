import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectColumnById, selectCardsForColumn } from '../redux/selectors';

export default function ColumnPage() {
  const { id } = useParams();

  const column = useSelector((state) => selectColumnById(state, id));
  const cards  = useSelector((state) => selectCardsForColumn(state, id));

  if (!column) {
    return (
      <div className="container" style={{ paddingTop: 16 }}>
        <p><Link to="/">{'←'} Powrót</Link></p>
        <h2>Kolumna nie istnieje</h2>
      </div>
    );
  }

  return (
    <div className="container" style={{ paddingTop: 16 }}>
      <p><Link to="/">{'←'} Powrót</Link></p>
      <h1>{column.title}</h1>

      <ul style={{ marginTop: 12 }}>
        {cards.map((c) => (
          <li key={c.id} style={{ padding: '6px 0' }}>
            <Link to={`/card/${c.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
              {c.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
