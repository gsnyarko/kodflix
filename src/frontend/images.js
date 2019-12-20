import React, { useEffect, useState } from 'react'
import Movietitles from './movietitles';
import { Redirect } from 'react-router-dom';
import Loading from './Loading';


export default function Imagini() {

  let [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/rest/movies')
      .then(response => response.json())
      .then(movies => setMovies(movies))
  }, []);

  if (movies === undefined) {
    return <Redirect to='/not-found' />
} else if (movies.length === 0) {
    return <div>< Loading/></div>
} else {
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
} 
}


