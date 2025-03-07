import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "./components/navBar"
import "./pages.css"

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='wraper'>
        <Navbar/>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Signup</button>
      </form>
      <p>
        {/* Already registered? <Link to="/login">Login here</Link> */}
      </p>
    </div>
  );
}

export default Signup;
