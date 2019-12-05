import React from 'react';
import Imagini from './images';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Details from './details';
import NotFound from './notfound';
import './App.css';

export default function App() {

    return (
      <Router>
        <div className="App">
          <Switch>
          <Route exact path='/' component={Imagini}/>
          <Route exact path='/not-found' component={NotFound}/>
          <Route exact path='/:movieId' component={Details}/>
          </Switch>
        </div>
      </Router>
    );
  }

