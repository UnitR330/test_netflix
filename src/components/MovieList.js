// MovieList.js

import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

function MovieList({ movies }) {
  return (
    <div className="movieList">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
 
 
/*
import React, { useState } from 'react';
import MovieCard from './MovieCard.js';

const moviesData = [
  { id: 1, title: 'Movie 1', imageUrl: 'url-to-image-1' },
  { id: 2, title: 'Movie 2', imageUrl: 'url-to-image-2' },
  { id: 3, title: 'Movie 3', imageUrl: 'url-to-image-3' },
  { id: 4, title: 'Movie 4', imageUrl: 'url-to-image-4' },
  { id: 5, title: 'Movie 5', imageUrl: 'url-to-image-5' },
  { id: 6, title: 'Movie 6', imageUrl: 'url-to-image-6' },
  { id: 7, title: 'Movie 7', imageUrl: 'url-to-image-7' },
  { id: 8, title: 'Movie 8', imageUrl: 'url-to-image-8' },
  { id: 9, title: 'Movie 9', imageUrl: 'url-to-image-9' },
  { id: 10, title: 'Movie 10', imageUrl: 'url-to-image-10' },
  // Add more movie objects as needed
 
  ];

const MovieList = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movieId) => {
    setSelectedMovie(movieId);
  };

  return (
    <div>
      <h1>Netflix Clone</h1>
      <div className="movie-list">
        {moviesData.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            imageUrl={movie.imageUrl}
            onClick={() => handleMovieClick(movie.id)}
          />
        ))}
      </div>
      {selectedMovie && <p>You selected Movie {selectedMovie}</p>}
    </div>
  );
};

export default MovieList;

*/
