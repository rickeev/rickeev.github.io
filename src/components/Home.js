import React from 'react';
import Navbar from './Navbar';
import Body from './Body';

// It is wrapped in <main> here in my Home.js file
// It is also wrapped in <main> in my index.js file
// I should change that later
const Home = () => {
  return (
    <main>
      <Navbar />
      <Body />
    </main>
  );
};


export default Home;
