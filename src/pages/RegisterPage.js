import React from 'react';
import RegisterInput from '../components/RegisterInput';

const RegisterPage = () => {
  return (
    <div className="fixed mb-24 w-full lg:relative">
      <img
        src="assets/image/logo.png"
        alt="logo teman bicara"
        className="mx-auto mt-10"
      ></img>
      <h2 className="mx-auto mt-4 text-center text-2xl font-bold text-slate-900">
        Teman Bicara
      </h2>
      <RegisterInput />
      <p className="text-center text-base text-slate-600">
        Already have an account?{' '}
        <span className="font-bold text-slate-700">Login</span>
      </p>
      <img src="assets/image/footer.png" className="mt-8 h-full w-full"></img>
    </div>
  );
};

export default RegisterPage;
