import React from 'react';
import LoginInput from '../components/LoginInput';

const LoginPage = () => {
  return (
    <div>
      <img
        src="assets/image/logo.png"
        alt="logo teman bicara"
        className="mx-auto mt-10"
      ></img>
      <h2 className="mx-auto mt-4 text-center text-2xl font-bold text-primary">
        Teman Bicara
      </h2>
      <LoginInput />
      <p className="text-center text-base text-primary">
        Dont have an account? <span className="font-bold">SignUp</span>
      </p>
      <img src="assets/image/footer.png" className="mb-0 h-full w-full"></img>
    </div>
  );
};

export default LoginPage;
