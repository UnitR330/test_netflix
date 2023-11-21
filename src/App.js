// App.js

import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      
      {/* Home Section */}
      < Home />
      
      {/* More Sections (Add as needed) */}
      <div className="app__section">
        {/* Add more sections/components here */}
      </div>
    </div>
  );
}

export default App;



/*
import React from 'react';
import Header from './components/Header';
import MovieRow from './components/MovieRow.js';
import './components/MovieRow.css';
import './App.css';

const App = () => {
  const movies = [
    { id: 1, title: 'Movie 1', poster: '/assets/posters/movie1.jpg' },
    { id: 2, title: 'Movie 2', poster: '/assets/posters/movie2.jpg' },
    { id: 3, title: 'Movie 3', poster: '/assets/posters/movie3.jpg' },
    { id: 4, title: 'Movie 4', poster: '/assets/posters/movie4.jpg' },
    { id: 5, title: 'Movie 5', poster: '/assets/posters/movie5.jpg' },
    { id: 6, title: 'Movie 6', poster: '/assets/posters/movie6.jpg' },
    { id: 7, title: 'Movie 7', poster: '/assets/posters/movie7.jpg' },
    { id: 8, title: 'Movie 8', poster: '/assets/posters/movie8.jpg' },
    { id: 9, title: 'Movie 9', poster: '/assets/posters/movie9.jpg' },
    { id: 10, title: 'Movie 10', poster: '/assets/posters/movie10.jpg' },
    // Add more movies as needed
  ]


  return (
    <div className="app">
      <Header />
      <MovieRow movies={movies} />
     </div>
  );
};

export default App;

*/