import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Course from './Pages/Course';
const root = ReactDOM.createRoot(document.getElementById('root'));
let allRoute=createBrowserRouter
(
  [
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'about-us',
      element:<About/>
    },
    {
      path:'course',
      element:<Course/>
    }
  ]
);
root.render(
  <React.StrictMode>
   <RouterProvider router={allRoute} />
  </React.StrictMode>
);


reportWebVitals();
