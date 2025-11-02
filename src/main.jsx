import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// Import your global CSS file
import './index.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* The App component is the root of your entire application */}
    <App />
  </React.StrictMode>
);