import React, { Component } from 'react';
import Imagini from './imagini';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Details from './details';
import NotFound from './not found';


import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
          <Route exact path='/' component={Imagini}/>
          <Route exact path='/not-found' component={NotFound}/>
          <Route exact path='/:movieInfo' component={Details}/>
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;

