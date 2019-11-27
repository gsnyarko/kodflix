import React, { useState, useEffect } from 'react';
import Imagini from './imagini';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Details from './details';
import NotFound from './notfound';
import './App.css';

export default function App() {

  let [ data, setData] = useState([]);

  useEffect (() => {
        fetch('/rest/movies')
        .then(response => response.json())
        .then(data => setData(data))
  }, []);

    return (
      <Router>
        <div className="App">
          <div>Movies</div>
            <div>{data ? 
                data.map(movie => {
                  return <h2>name: {movie.name}</h2>
              }): 
              <h2>no data</h2>}</div>
          
          <Switch>
          <Route exact path='/' component={Imagini}/>
          <Route exact path='/not-found' component={NotFound}/>
          <Route exact path='/:movieInfo' component={Details}/>
          </Switch>
        </div>
      </Router>
    );
  }

