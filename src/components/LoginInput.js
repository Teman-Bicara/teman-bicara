/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import PropTypes from 'prop-types';
import React from 'react';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChangeHandler] = useInput('');
  const [password, onPasswordChangeHandler] = useInput('');

  const onSubmitHandler = (e) => {
    e.preventDefault();

    login({ email, password });
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="m-8 block text-lg font-semibold text-slate-900 lg:flex lg:flex-col lg:items-center lg:p-0"
    >

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        placeholder="Enter your email here"
        value={email}
        onChange={onEmailChangeHandler}
        className="input-label"
        required="true"
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Enter your password here"
        value={password}
        onChange={onPasswordChangeHandler}
        className="input-label"
        required="true"
      />
      <button type="submit" className="lg:flex lg:flex-row lg:items-center lg:justify-center lg:py-[10px] lg:px-6 lg:w-24 lg:h-12 mx-auto h-full w-full cursor-pointer items-center justify-center rounded-lg border bg-gradient-to-r from-first to-second p-3 text-2xl font-semibold text-white hover:opacity-80">
        Login
      </button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
