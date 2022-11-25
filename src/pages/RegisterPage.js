/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';

function RegisterPage() {
  return (
    <div>
      <img
        src="assets/image/logo.png"
        alt="logo teman bicara"
        className="mx-auto mt-10"
      />
      <h2 className="mx-auto mt-4 text-center text-2xl font-bold text-slate-900">
        Teman Bicara
      </h2>
      <RegisterInput />
      <p className="text-center text-base text-slate-600">
        Already have an account?
        {' '}
        <span className="font-bold text-slate-700">
          <Link className="link" to="/login">Login</Link>
        </span>
      </p>
      <img src="assets/image/footer.png" className="fixed w-full lg:hidden" alt="footer" />
    </div>
  );
}

export default RegisterPage;
