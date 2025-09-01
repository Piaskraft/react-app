import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import ColumnPage from './pages/ColumnPage';
import CardPage from './pages/CardPage';
import Favorite from './pages/Favorite';
import About from './pages/About';
import NotFound from './pages/NotFound';

import List from './components/List';



const linkStyle = (isActive) => ({
  color: '#fff',
  textDecoration: 'none',
  fontSize: '18px',
  fontWeight: 700,
  opacity: isActive ? 1 : 0.9,
});


export default function App() {
  return (
    <>
      {/* GÓRNE MENU jak w zadaniu */}
          <header  style={{ padding: '12px 0' }}>
        <nav style={{ display: 'flex', gap: 18, justifyContent: 'flex-end' }}>
          <NavLink to="/" end style={({ isActive }) => linkStyle(isActive)}>Home</NavLink>
          <NavLink to="/favorite" style={({ isActive }) => linkStyle(isActive)}>Favorite</NavLink>
          <NavLink to="/about" style={({ isActive }) => linkStyle(isActive)}>About</NavLink>
        </nav>
      </header>


      {/* Widoki */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list/:listId" element={<List />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/about" element={<About />} />

        <Route path="/column/:id" element={<ColumnPage />} />
        <Route path="/card/:id" element={<CardPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
