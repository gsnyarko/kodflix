import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './frontend/App';
import * as serviceWorker from './frontend/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// this stops the browser from reloading our entire page, it only 
//reloades where we make our changes

if(module.hot) {
    module.hot.accept();
}
