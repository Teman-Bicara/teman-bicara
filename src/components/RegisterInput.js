/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
import PropTypes from 'prop-types';
import React from 'react';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameHandler] = useInput('');
  const [email, onEmailHandler] = useInput('');
  const [password, onPasswordHandler] = useInput('');

  const onSubmitHandler = (event) => {
    event.preventDefault();

    register({ name, email, password });
  };

  return (
    <div>
      <form
        onSubmit={onSubmitHandler}
        className="mt-4 block text-lg font-semibold text-slate-900 lg:flex lg:flex-col lg:items-center lg:p-0 sm:max-w-2xl mx-auto"
      >
        <label htmlFor="name" className="md:text-center">Username</label>
        <input
          id="name"
          type="name"
          placeholder="lazar"
          value={name}
          onChange={onNameHandler}
          className="input-field"
          required="true"
        />

        <label htmlFor="email" className="md:text-center">Email</label>
        <input
          id="email"
          type="email"
          placeholder="lazar@codeday.org"
          value={email}
          onChange={onEmailHandler}
          className="input-field"
          required="true"
        />

        <label htmlFor="password" className="md:text-center">Password</label>
        <input
          type="password"
          placeholder="********"
          value={password}
          onChange={onPasswordHandler}
          className="input-field"
          required="true"
        />
        <button type="submit" className="block w-full max-w-[30%] bg-[#2E277D] text-white mx-auto mt-12 py-3 rounded-md whitespace-nowrap hover:opacity-80">
          Sign up
        </button>
      </form>
    </div>

  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
