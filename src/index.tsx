import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SuiNetworkProvider } from './providers/SuiNetworkProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SuiNetworkProvider>
      <App />
    </SuiNetworkProvider>
  </React.StrictMode>
);

