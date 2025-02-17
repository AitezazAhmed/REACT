import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './style.css'; // Import global st
import Usercontext from '../usercontext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Usercontext>
    <App />
    </Usercontext>
  </React.StrictMode>
);
