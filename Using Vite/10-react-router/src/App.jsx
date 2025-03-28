import { useState } from 'react';
import './App.css';
import * as React from 'react';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Paracomp from './components/Paracomp';
import Courses from './components/Courses';
import MockTest from './components/MockTest';
import Reports from './components/Reports';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Navbar />
        <HomePage />
      </div>
    ),
  },
  {
    path: '/aboutus',
    element: (
      <div>
        <Navbar />
        <AboutUs />
      </div>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <div>
        <Navbar />
        <Dashboard />
      </div>
    ),
    children: [
      { path: 'courses', element: <Courses /> },
      { path: 'mock-tests', element: <MockTest /> },
      { path: 'reports', element: <Reports /> }, // Fix: Reports instead of Report
    ],
  },
  {
    path: '/student/:id',
    element: (
      <div>
        <Navbar />
        <Paracomp />
      </div>
    ),
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
