import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Course from './Pages/Course';
import Blog from './Pages/Blog';
import BlogDetails from './Pages/BlogDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));

const allRoute = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'about-us',
    element: <About />,
  },
  {
    path: 'course',
    element: <Course />,
  },
  {
    path: 'blog',
    element: <Blog />,
  },
  {
    path: 'blog/:id',
    element: <BlogDetails />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={allRoute} />
  </React.StrictMode>
);

reportWebVitals();
