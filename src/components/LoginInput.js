/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
import React from 'react';
// import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [name, onNameHandler] = useInput('');
  const [password, onPasswordHandler] = useInput('');

  const onSubmitHandler = (event) => {
    event.preventDefault();

    login({ name, password });
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="mt-12 block text-lg font-semibold text-slate-900 lg:flex lg:flex-col lg:items-center lg:p-0 sm:max-w-2xl mx-auto"
    >
      <label htmlFor="username" className="md:text-center">Username</label>
      <input
        id="username"
        type="text"
        placeholder="lazar@codeday.org"
        ref={onNameHandler}
        className="input-field"
        required="true"
      />

      <label htmlFor="password" className="md:text-center">Password</label>
      <input
        type="password"
        placeholder="********"
        ref={onPasswordHandler}
        className="input-field"
        required="true"
      />
      <button type="submit" className="block w-full max-w-[30%] bg-[#2E277D] text-white mx-auto mt-12 py-3 rounded-md hover:opacity-80">
        Login
      </button>
    </form>
  );
}

// LoginInput.propTypes = {
//   login: PropTypes.func.isRequired,
// };

export default LoginInput;
