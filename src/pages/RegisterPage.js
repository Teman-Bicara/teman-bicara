/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';

function RegisterPage() {
  return (
    <div className="min-h-screen w-full mx-auto max-w-[80%]">
      <img
        src="assets/image/logo-tebi.png"
        alt="logo teman bicara"
        className="mx-auto mb-[-2.2rem] pt-12"
      />
      <h2 className="mx-auto text-center text-2xl font-bold text-black">
        Teman Bicara
      </h2>
      <RegisterInput />
      <p className="text-center text-base text-slate-600 lg:absolute lg:top-5 lg:right-10">
        Already have an account?
        {' '}
        <span className="font-bold text-slate-700">
          <Link className="link" to="/login">Login</Link>
        </span>
      </p>
      <img src="assets/image/footer.png" className="fixed bottom-0 left-0 w-full max-h-96 -z-10" alt="footer" />
    </div>
  );
}

export default RegisterPage;
