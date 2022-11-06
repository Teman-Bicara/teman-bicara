import PropTypes from 'prop-types';
import React from 'react';
import useInput from '../hooks/useInput';

const LoginInput = ({ login }) => {
  const [email, onEmailChangeHandler] = useInput('');
  const [password, onPasswordChangeHandler] = useInput('');

  const onSubmitHandler = (e) => {
    e.preventDefault();

    login({ email, password });
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="m-8 block text-2xl font-semibold"
    >
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        placeholder="Enter your email here"
        value={email}
        onChange={onEmailChangeHandler}
        className="input-label"
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Enter your password here"
        value={password}
        onChange={onPasswordChangeHandler}
        className="input-label"
      />
      <button className="mx-auto flex h-full w-full cursor-pointer items-center justify-center rounded-lg border bg-[#2E277D] p-3 text-2xl font-semibold text-white">
        Login
      </button>
    </form>
  );
};

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
