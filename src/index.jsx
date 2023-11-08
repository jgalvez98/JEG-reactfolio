import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// TO check later on to start measuring performance in the app, pass a function to log results (for example: reportWebVitals(console.log)) //
// TO check later in order to add measuring performance https://bit.ly/CRA-vitals //
reportWebVitals();