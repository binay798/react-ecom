import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from  './App';
import { BrowserRouter } from 'react-router-dom';
import StateProvider from './store/store';

let app = (
  <StateProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </StateProvider>
  
)

ReactDOM.render(
 app,
  document.getElementById('root')
);


