import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'

// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

createRoot(
  
  document.getElementById('root')
).render(<React.StrictMode>
  <App />
</React.StrictMode>,)


reportWebVitals();
