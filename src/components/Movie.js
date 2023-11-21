import React from 'react';
import './Movie.css';

const Movie = ({ title, poster }) => (
  <div className="movie">
    <img src={poster} alt={title} />
  </div>
);

export default Movie;
