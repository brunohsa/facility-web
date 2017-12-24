import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './js/containers/App';
import { BrowserRouter } from 'react-router-dom'
import './style/index.css';

ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
