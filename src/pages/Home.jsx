import Hello from '../components/Hello';
import SearchForm from '../components/SearchForm';
import Hero from '../components/Hero';
import List from '../components/List';

export default function Home() {
  return (
    <>
      {/* GÓRA strony – bez białego tła, własny wrapper */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px', background: 'transparent', border: 0, boxShadow: 'none' }}>
        {/* Nagłówek wyśrodkowany */}
        <div style={{ textAlign: 'center', margin: '16px 0 8px' }}>
          <Hello />
        </div>

        {/* Search na środku */}
        <div style={{ display: 'flex', justifyContent: 'center', margin: '12px 0 8px' }}>
          <SearchForm />
        </div>
      </div>

      {/* Reszta bez zmian */}
      <Hero />
      <div className="container">
        <List />
      </div>
    </>
  );
}
