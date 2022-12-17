/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
import axios from 'axios';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import CONFIG from '../global/config';

function LoginInput({ login }) {
  const identiferRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `Welcome to Teman Bicara ${identiferRef.current.value}!`,
      showConfirmButton: false,
      timer: 1500,
    });
    try {
      const res = await axios.post(`${CONFIG.BASE_URL}/api/auth/local`, {
        identifier: identiferRef.current.value,
        password: passwordRef.current.value,
      });
      login({
        jwt: res.data.jwt,
        user: res.data.user,
      });
      navigate('/');
    } catch (err) {
      alert(err);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="mt-12 block text-lg font-semibold text-slate-900 lg:flex lg:flex-col lg:items-center lg:p-0 sm:max-w-2xl mx-auto"
    >
      <label htmlFor="username" className="md:text-center">Email or username</label>
      <input
        id="username"
        type="text"
        placeholder="Enter your username or email"
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
      <button type="submit" className="block w-full max-w-[30%] bg-button text-white mx-auto mt-12 py-3 rounded-md hover:opacity-80">
        Login
      </button>
    </form>
  );
}

export default LoginInput;
