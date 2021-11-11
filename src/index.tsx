import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import { AuthProvider } from './Contexts/Auth';
import { LocalStorageProvider } from './Contexts/LocalStorage';

ReactDOM.render(
  <React.StrictMode>
    <LocalStorageProvider>
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </LocalStorageProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
