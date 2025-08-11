import Hero from './components/Hero';
import SearchForm from './components/SearchForm';
import List from './components/List';

const App = () => {
  return (
    <div className="container" >
      <Hero />
      <SearchForm />
      <List />
    </div>
  );
};

export default App;
