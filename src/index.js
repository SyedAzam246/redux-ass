
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot for React 18
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store'; 
import './index.css';

const root = createRoot(document.getElementById('root')); // Create root element

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);