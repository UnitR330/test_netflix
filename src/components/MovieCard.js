

import React from 'react';
import './MovieCard.css';

function MovieCard({ movie }) {
  return (
    <div className="movieCard">
      <img src={movie.poster} alt={movie.title} />
      <div className="movieCard__content">
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
      </div>
    </div>
  );
}

export default MovieCard;



/*
import React from 'react';
import './MovieCard.css';

function MovieCard() {
  return (
    <div className="movieCard">
      { Image }
      { Title }
      { Description }
    </div>
  );
}

export default MovieCard;
*/


/*
import React from 'react';
import './MovieCard.css';

const MovieCard = ({ title, imageUrl, onClick }) => {
  return (
    <div className="movie-card" onClick={onClick}>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default MovieCard; */
