import React from 'react';
import Header from '../Common/Header';
import { useLocation } from 'react-router-dom';
import { blogs } from '../Data/blogs';

export default function BlogDetails() {
  const location = useLocation();
  const currentId = location.pathname.split('/')[2];
  console.log(currentId);

  const currentData = blogs.find((v) => v.id === parseInt(currentId));
  console.log(currentData);

  return (
    <div>
      <Header />
      <h1>{currentData ? currentData.title : 'Blog Not Found'}</h1>
      <p>{currentData ? currentData.body : ''}</p>
    </div>
  );
}
