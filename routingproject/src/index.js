import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
const root = ReactDOM.createRoot(document.getElementById('root'));
let allRoute=createBrowserRouter
(
  [
    {
      path:'/',
      element:<Home/>
    }
  ]
)
root.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
);


reportWebVitals();
