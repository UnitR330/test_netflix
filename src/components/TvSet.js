// TvSet.js

import React, { useState, useEffect } from 'react';
import './TvSet.css';

function TvSet() {
  const [randomPosters, setRandomPosters] = useState([]);
  const posters = [
    './assets/posters/movie1.jpg',
    './assets/posters/movie2.jpg',
    './assets/posters/movie3.jpg',
    './assets/posters/movie4.jpg',
    './assets/posters/movie5.jpg',
    './assets/posters/movie6.jpg',
    './assets/posters/movie7.jpg',
    './assets/posters/movie8.jpg',
    './assets/posters/movie9.jpg',
    './assets/posters/movie1.jpg',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomPoster = posters[Math.floor(Math.random() * posters.length)];
      setRandomPosters((prevPosters) => [randomPoster, ...prevPosters.slice(1)]);
    }, 3000); // Change posters every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="tvSet">
      <div className="tvSet__textArea">
        <div className="tvSet__textAreaP">
         <h2>Look on your TV</h2>
         <h4>It is simple like never be before: choose, play, look!</h4>
         <h5>Your favorite shows, movies, live streams and much more from one provider! </h5>
      </div>
    </div>

      <div className="tvSet_display">
         <div className="tvSet_displayP">
         <img src="./img/tv.png" />
        
         <div className="tvSet__imageArea">
                 {randomPosters.map((poster, index) => (
                     <img key={index} src={poster} alt={`Movie Poster ${index + 1}`} />
                     ))}
                     </div>
         </div>
      </div>      
</div>      
  );
}

export default TvSet;

