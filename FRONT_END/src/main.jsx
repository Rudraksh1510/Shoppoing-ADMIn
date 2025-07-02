// main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from "@/components/ui/provider"
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
