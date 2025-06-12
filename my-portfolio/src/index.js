import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const plausible = document.createElement('script');
plausible.setAttribute('defer', '');
plausible.setAttribute('data-domain', 'yourusername.github.io');
plausible.src = 'https://plausible.io/js/plausible.js';
document.head.appendChild(plausible);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
