import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ContextCombiner } from './context/ContextCombiner';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ContextCombiner>
      <App />
    </ContextCombiner>
  </BrowserRouter>,
);
