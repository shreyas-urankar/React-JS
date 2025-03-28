import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={() => navigate('/aboutus')}>
        Move to About Page
      </button>
    </div>
  );
};

export default HomePage;
