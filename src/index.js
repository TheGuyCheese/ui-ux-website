import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import {createRoot} from 'react-dom/client';

import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render (
  <StrictMode>
    <App />
  </StrictMode>
)