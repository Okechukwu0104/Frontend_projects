import React from 'react';
import Navbar from "../components/navBar"
import "../../styles"
const Home = () => {

  return (
    <div className='wraper'>
        <Navbar/>
      <h1>Welcome to Our Website</h1>
      <p>This is the home page. Navigate using the links above to login or signup.</p>
    </div>
  );
};

export default Home;
