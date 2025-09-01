import Hello from '../components/Hello';
import Hero from '../components/Hero';
import Lists from '../components/Lists/Lists';

export default function Home() {
  return (
    <>
      {/* GÓRA strony – bez białego tła, własny wrapper */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 16px',
          background: 'transparent',
          border: 0,
          boxShadow: 'none',
        }}
      >
        {/* Nagłówek wyśrodkowany */}
        <div style={{ textAlign: 'center', margin: '16px 0 8px' }}>
          <Hello />
        </div>
      </div>

      {/* Reszta bez zmian */}
      <Hero />
      <div className="container">
        <Lists />
      </div>
    </>
  );
}
