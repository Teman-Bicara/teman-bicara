/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';

function RegisterPage() {
  return (
    <div>
      <img
        src="assets/image/logo-fix.png"
        alt="logo teman bicara"
        className="mx-auto w-[151px] h-[151px] left=[112px] top-[70px]"
      />
      <h2 className="mx-auto mt-0 text-center text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-first to-second">
        Teman Bicara
      </h2>
      <RegisterInput />
      <p className="text-center text-base text-slate-600 lg:absolute lg:top-5 lg:right-10">
        Already have an account?
        {' '}
        <span className="font-bold text-slate-700 cursor-pointer">
          <Link className="link" to="/login">Login</Link>
        </span>
      </p>
    </div>
  );
}

export default RegisterPage;
