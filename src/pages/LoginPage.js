import React from 'react';
import LoginInput from '../components/LoginInput';
import { Link } from 'react-router-dom';
const LoginPage = () => {
  return (
    <div>
      <img
        src="assets/image/logo.png"
        alt="logo teman bicara"
        className="mx-auto mt-10"
      ></img>
      <h2 className="mx-auto mt-4 text-center text-2xl font-bold text-slate-900">
        Teman Bicara
      </h2>
      <LoginInput />
      <p className="text-center text-base text-slate-600">
        Dont have an account?{' '}
        <span className="font-bold text-slate-700">
          <Link className='link' to='/register'>Signup</Link>
        </span>
      </p>
      <img src="assets/image/footer.png" className="fixed mt-10 w-full lg:hidden"></img>
    </div>
  );
};

export default LoginPage;
