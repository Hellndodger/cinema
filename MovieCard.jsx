import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTicketAlt } from 'react-icons/fa';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    // Перевірка наявності ID перед навігацією
    if (movie?.id) {
      navigate(`/booking/${movie.id}`);
    } else {
      console.error('Помилка: Відсутній ID фільму');
    }
  };

  return (
    <div className="movie-card">
      <div className="movie-poster-container">
        <img 
          src={movie.poster} 
          alt={movie.title} 
          className="movie-poster"
        />
      </div>
      
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        
        <div className="session-details">
          <span className="genre-badge">{movie.genre}</span>
          <span className="session-time">{movie.session}</span>
        </div>

        <button 
          className="btn-book"
          onClick={handleBookNow}
        >
          <FaTicketAlt /> Book Now
        </button>
      </div>
    </div>
  );
};

export default MovieCard;