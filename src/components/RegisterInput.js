/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CONFIG from '../global/config';

function RegisterInput() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setError(false);
    try {
      const res = await axios.post(`${CONFIG.BASE_URL}/api/auth/local/register`, {
        username, email, password,
      });
      res.data && navigate('/login');
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
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          className="input-field"
          required="true"
        />

        <label htmlFor="email" className="md:text-center">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
          required="true"
        />

        <label htmlFor="password" className="md:text-center">Password</label>
        <span className="block text-xs text-red-400">Password must be 6 characters minimum!</span>
        <input
          type="password"
          placeholder="********"
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
          required="true"
        />
        <button type="submit" className="block w-full max-w-[30%] bg-button text-white mx-auto mt-12 py-3 rounded-md whitespace-nowrap hover:opacity-80">
          Sign up
        </button>
        {error && alert('something went wrong! and your password must be minimum 6 characters')}
      </form>

    </div>

  );
}

export default RegisterInput;
