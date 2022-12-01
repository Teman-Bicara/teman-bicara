/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';

function LoginPage() {
  return (
    <div className="min-h-screen w-full mx-auto max-w-[80%]">
      <img
        src="assets/image/logo-tebi.png"
        alt="logo teman bicara"
        className="mx-auto mb-[-2.2rem] pt-36"
      />
      <h2 className="mx-auto text-center text-2xl font-bold text-black">
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
      <img src="assets/image/footer.png" className="fixed bottom-0 left-0 w-full max-h-96 -z-10" alt="footer" />
    </div>
  );
}

export default LoginPage;
