import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/users', {
        user: {
          email: email,
          password: password,
          password_confirmation: passwordConfirmation
        }
      });
      alert('Signed up successfully');
    } catch (error) {
      console.error('There was an error signing up', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Confirm Password" 
        value={passwordConfirmation} 
        onChange={(e) => setPasswordConfirmation(e.target.value)} 
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
