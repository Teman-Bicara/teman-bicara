/* eslint-disable no-unused-expressions */
import axios from 'axios';
import React, { useRef } from 'react';

function LoginInput() {
  const userRef = useRef();
  const passwordRef = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      res.data && window.location.replace('/landingpage');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="mt-12 block text-lg font-semibold text-slate-900 lg:flex lg:flex-col lg:items-center lg:p-0 sm:max-w-2xl mx-auto"
    >
      <label htmlFor="username" className="md:text-center">Username</label>
      <input
        id="username"
        type="text"
        placeholder="lazar@codeday.org"
        ref={userRef}
        className="input-field"
        required="true"
      />

      <label htmlFor="password" className="md:text-center">Password</label>
      <input
        type="password"
        placeholder="********"
        ref={passwordRef}
        className="input-field"
        required="true"
      />
      <button type="submit" className="block w-full max-w-[30%] bg-[#2E277D] text-white mx-auto mt-12 py-3 rounded-md hover:opacity-80">
        Login
      </button>
    </form>
  );
}

export default LoginInput;
