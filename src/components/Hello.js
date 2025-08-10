import './Hello.css';

const Hello = ({ name }) => {
  return (
    <section className="hello">
      <h1 className="hello__title">Witaj, {name}!</h1>
      <p className="hello__subtitle">Miłego dnia 👋</p>
    </section>
  );
};

export default Hello;
