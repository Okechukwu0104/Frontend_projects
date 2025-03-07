import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../navBar"

const Signup = () => {
  const [userInput, setUserInput] = useState({email: '', password: ''});

  const handleUserInput = (e) => {
    const {name, value} = e.target;
    setUserInput((prev) => ({...prev, [name]: value.trim()}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInput);
  };

  return (
    <div className='wrapper'>
      <Navbar />
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={userInput.email}
          onChange={handleUserInput}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={userInput.password}
          onChange={handleUserInput}
        />
        <button type="submit">Signup</button>
      </form>
      <p>
        Already registered? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}

export default Signup;
