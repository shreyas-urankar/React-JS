import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>About Us</h2>
      <button onClick={() => navigate('/dashboard')}>
        Move to Dashboard page
      </button>
    </div>
  );
};

export default AboutUs;
