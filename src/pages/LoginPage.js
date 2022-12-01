/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';

function LoginPage() {
  return (
    <div className="relative">
      <img
        src="assets/image/logo-fix.png"
        alt="logo teman bicara"
        className="w-[151px] h-[151px] top-[159px] left-[104px] mx-auto"
      />
      <h2 className="mx-auto text-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-first to-second">
        Teman Bicara
      </h2>
      <LoginInput />
      <p className="text-center text-base text-slate-600 lg:absolute lg:top-5 lg:right-10">
        Dont have an account?
        {' '}
        <span className="font-bold text-slate-700">
          <Link className="link" to="/register">Signup</Link>
        </span>
      </p>
      <img src="assets/image/footer.png" className="fixed bottom-0 w-full lg:hidden sm:hidden md:hidden" alt="footer" />
    </div>
  );
}

export default LoginPage;
