import React from 'react';
import Movie from './Movie';
import './MovieRow.css';

const MovieRow = ({ movies }) => (
  <div className="movieRow">
    {movies.map(movie => (
      <Movie
        key={movie.id}
        title={movie.title}
        poster={movie.poster}
      />
    ))}
  </div>
);

export default MovieRow;
