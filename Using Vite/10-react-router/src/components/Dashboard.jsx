import React from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <Outlet /> {/* Ensures child routes render inside Dashboard */}
    </div>
  );
};

export default Dashboard;
