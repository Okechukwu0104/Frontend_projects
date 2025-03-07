import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/navbar/navBar"
import "../styles/"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (

    <div className='wraper'>
      <Navbar />
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
z
      </form>
      <p>
        Haven't registered? <Link to="/signup">Signup here</Link>
      </p>
    </div>
  );
};

export default Login;
