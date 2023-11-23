// Home.js

import React from 'react';
import MovieList from './MovieList';
import './Home.css';

function Home() {
  const featuredMovies = [
    {
      id: 1,
      title: 'Terminator',
      description: 'Fantastic action.',
      poster: './assets/posters/movie1.jpg',  
    },
    {
      id: 2,
      title: 'Avatar returns',
      description: 'Good boy made a miricle.',
      poster: './assets/posters/movie2.jpg', 
    },
    {
      id: 3,
      title: 'The Web',
      description: 'Mistic love between indian.',
      poster: './assets/posters/movie3.jpg',  
    },
    {
      id: 4,
      title: 'The Dark Knight',
      description: 'Gotham needs a hero.',
      poster: './assets/posters/movie4.jpg',  
    },
    {
      id: 5,
      title: 'This is Mario!',
      description: 'Save princess from loneliness.',
      poster: './assets/posters/movie5.jpg',  
    },

    {
        id: 6,
        title: 'Alice from the mirror Glass',
        description: 'Time tripping, borders breaking.',
        poster: './assets/posters/movie6.jpg', 
      },
      {
        id: 7,
        title: 'Fast and furios 6',
        description: 'Speed, danger chasing, action.',
        poster: './assets/posters/movie7.jpg', 
      },
      {
        id: 8,
        title: 'Top GUN Maveric',
        description: 'Are you looking for F-35 fighter?',
        poster: './assets/posters/movie8.jpg', 
      },
      {
        id: 9,
        title: 'Dragon: The Bruce Lee Story',
        description: 'Story about legenda.',
        poster: './assets/posters/movie9.jpg', 
      },
      {
        id: 10,
        title: 'Cola',
        description: 'Always Coca-Cola.',
        poster: './assets/posters/movie10.jpg', 
      },



    // Add more movies as needed
  ];

  return (
    <div className="home">
      {/* Featured Movies Section */}
      <h2 className="home__title">Featured Movies</h2>
      <MovieList movies={featuredMovies} />
      {/* Add more sections or components as needed */}
    

    </div>
  );
}

export default Home;

/*
import React from 'react';
import MovieCard from './MovieCard';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="home__row">
        <MovieCard />
      </div>
    </div>
  );
}

export default Home;

*/
