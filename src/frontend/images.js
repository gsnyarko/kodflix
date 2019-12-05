import React, { useEffect, useState } from 'react'
import Movietitles from './movietitles';


export default function Imagini() {

  let [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/rest/movies')
      .then(response => response.json())
      .then(movies => setMovies(movies))
  }, []);

if (movies) {
  return (
    <div className='container'>
      {
        movies.map(movietitles => (
          <Movietitles
            key={movietitles.id}
            id={movietitles.id}
            name={movietitles.name}
            pic={movietitles.pic} />
        ))
      }
    </div>
  );
} else {
  return <h1> no data</h1>
}
}


