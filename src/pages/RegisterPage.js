import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import RegisterInput from '../components/RegisterInput';

function RegisterPage() {
  return (
    <div className="min-h-screen w-full mx-auto max-w-[80%]">
      <LazyLoadImage
        src="assets/image/logo-tebi.svg"
        alt="logo teman bicara"
        className="mx-auto mb-[-1rem] pt-12"
      />
      <h2 className="mx-auto text-center text-2xl font-bold text-black">
        Teman Bicara
      </h2>
      <RegisterInput />
      <p className="text-center text-base text-slate-600 lg:absolute lg:top-5 lg:right-10">
        Already have an account?
        {' '}
        <span className="font-bold text-slate-700">
          <Link to="/login">Login</Link>
        </span>
      </p>
      <div className="fixed bottom-0 left-0 min-w-full max-h-96 -z-10">
        <LazyLoadImage src="/assets/image/footer1.svg" alt="gambar footer" />
      </div>
    </div>
  );
}

export default RegisterPage;
