import React from 'react';
import Header from './Header.jsx';
import Hero from './Hero.jsx';

function Home() {
    return (
      <div className='w-full bg-gradient-to-br from-gray-800 via-gray-900 to-black'>
        <Header />
        <Hero />
      </div>
    );
  }
  
  export default Home;
  