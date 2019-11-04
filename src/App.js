import React, { Component } from 'react';
import caduta from './images/caduta-pic.jpg';
import crozza from './images/crozza-pic.jpg';
import chapo from './images/el chapo-pic.jpg';
import iene from './images/iene-pic.jpeg';
import sherlock from './images/sherlock-pic.jpg';
import striscia from './images/striscia-pic.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <br /><br></br>
        <div className='container'>
          <div className='item'>
            <img src={caduta} alt='caduta-pic' />
            <div className='overlay'>
              <h1>caduta libera</h1>
            </div>
          </div>
          <div className='item'>
            <img src={crozza} alt='crozza-pic' />
            <div className='overlay'>
              <h1>crozza</h1>
            </div>
          </div>
          <div className='item'>
            <img src={chapo} alt='el chapo-pic' />

            <div className='overlay'>
              <h1>el chapo</h1>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='item'>
            <img src={iene} alt='iene-pic' />
            <div className='overlay'>
              <h1>le iene</h1>
            </div>
          </div>
          <div className='item'>
            <img src={sherlock} alt='sherlock-pic' />
            <div className='overlay'>
              <h1>sherlock</h1>
            </div>
          </div>
          <div className='item'>
            <img src={striscia} alt='striscia-pic' />
            <div className='overlay'>
              <h1>striscia</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App; {
  
}
