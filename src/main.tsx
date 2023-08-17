import React from 'react';
import ReactDOM from 'react-dom/client';

import Converter from './components/Converter/Converter';

import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Converter />
  </React.StrictMode>
);
