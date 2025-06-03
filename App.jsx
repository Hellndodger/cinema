import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import Booking from './pages/Booking';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Filmers.com</h1>
        <div className="nav-middle">
    <Link to="/contact" className="nav-link">Contact</Link>
    <Link to="/about" className="nav-link">About Us</Link>
    <Link to="/info" className="nav-link">Info</Link>
  </div>
        <nav>
          <Link to="/" className="nav-link">
            <FiHome className="nav-icon" /> Home
          </Link>
        </nav>
      </header>
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking/:movieId" element={<Booking />} />
        </Routes>
      </main>

      <ToastContainer 
        position="bottom-right"
        autoClose={3000}
        theme="dark"
      />
    </div>
  );
};

export default App;