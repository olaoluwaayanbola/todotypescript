import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom/client';
import { InputProvider } from './Context';
import { BrowserRouter as Router } from "react-router-dom"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <InputProvider>
        <App />
      </InputProvider>
    </Router>
  </React.StrictMode>
);

