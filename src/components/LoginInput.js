/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
import axios from 'axios';
import React, { useRef } from 'react';

function LoginInput() {
  const identiferRef = useRef();
  const passwordRef = useRef();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('http://localhost:1337/api/auth/local', {
        identifier: identiferRef.current.value,
        password: passwordRef.current.value,
      });
      res.data && window.location.replace('/home');
    } catch (err) {
      alert(err);
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
        ref={identiferRef}
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
