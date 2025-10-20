import React from 'react';
import Hero from '../components/Hero';
import Events from './Events';
import Products from './Products';

const Home = () => {
  return (
    <div>
      <Hero />
      <Events />
      <Products />
    </div>
  );
};

export default Home;