/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import axios from 'axios';
// import useInput from '../hooks/useInput';

function RegisterInput() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setError(false);
    try {
      const res = await axios.post('http://localhost:1337/api/auth/local/register', {
        username, email, password,
      });
      res.data && window.location.replace('/login');
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div>
      <form
        onSubmit={onSubmitHandler}
        className="mt-4 block text-lg font-semibold text-slate-900 lg:flex lg:flex-col lg:items-center lg:p-0 sm:max-w-2xl mx-auto"
      >
        <label htmlFor="name" className="md:text-center">Username</label>
        <input
          id="name"
          type="name"
          placeholder="Put Your Name Here..."
          onChange={(e) => setUsername(e.target.value)}
          className="input-field"
          required="true"
        />

        <label htmlFor="email" className="md:text-center">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Put Your Email Here..."
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
          required="true"
        />

        <label htmlFor="password" className="md:text-center">Password</label>
        <input
          type="password"
          placeholder="********"
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
          required="true"
        />
        <button type="submit" className="block w-full max-w-[30%] bg-[#2E277D] text-white mx-auto mt-12 py-3 rounded-md whitespace-nowrap hover:opacity-80">
          Sign up
        </button>
      </form>
      {error && <span>Something went wrong!</span>}
    </div>

  );
}

export default RegisterInput;
