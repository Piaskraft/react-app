import Hello from './components/Hello';
import { people } from './data/people';

const App = () => {
  return (
    <main style={{ padding: 20, background: '#f7f7f7' }}>
      {people.map(person => (
        <Hello key={person.id} name={person.name} />
      ))}
    </main>
  );
};

export default App;
