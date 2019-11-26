import React from 'react'
import Movietitles from './movietitles';
import getImagini from './galleria-imagini'

export default function Imagini() {
  return (
    <div>
      <div className='container'>
        {
          getImagini().map(movietitles => (
            <Movietitles
              key={movietitles.id}
              id={movietitles.id}
              name={movietitles.name}
              pic={movietitles.pic} />
          ))
        }
      </div>
    </div>
  );
}

