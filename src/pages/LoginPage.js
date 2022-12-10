/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';

function LoginPage({ loginSuccess }) {
  return (
    <div className="min-h-screen w-full mx-auto max-w-[80%]">
      <img
        src="assets/image/logo-tebi.svg"
        alt="logo teman bicara"
        className="mx-auto mb-[-1rem] pt-12"
      />
      <h2 className="mx-auto text-center text-2xl font-bold text-black">
        Teman Bicara
      </h2>
      <LoginInput login={loginSuccess} />
      <p className="text-center text-base text-slate-600 lg:absolute lg:top-5 lg:right-10">
        Dont have an account?
        {' '}
        <span className="font-bold text-slate-700">
          <Link to="/register">Signup</Link>
        </span>
      </p>
      <div className="fixed bottom-0 left-0 min-w-full max-h-96 -z-10">
        <img src="assets/image/footer1.svg" alt=" " />
      </div>
    </div>
  );
}

export default LoginPage;
