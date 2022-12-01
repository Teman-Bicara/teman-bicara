import PropTypes from 'prop-types';
import React from 'react';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [username, onUsernameChangeHandler] = useInput('');
  const [email, onEmailChangeHandler] = useInput('');
  const [password, onPasswordChangeHandler] = useInput('');

  const onSubmitHandler = (e) => {
    e.preventDefault();

    register({ username, email, password });
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="mt-4 block text-lg font-semibold text-slate-900 lg:flex lg:flex-col lg:items-center lg:p-0 sm:max-w-2xl mx-auto"
    >
      <label htmlFor="name" className="md:text-center">Username</label>
      <input
        id="name"
        type="name"
        placeholder="lazar"
        value={username}
        onChange={onUsernameChangeHandler}
        className="input-field"
        required="true"
      />

      <label htmlFor="email" className="md:text-center">Email</label>
      <input
        id="email"
        type="email"
        placeholder="lazar@codeday.org"
        value={email}
        onChange={onEmailChangeHandler}
        className="input-field"
        required="true"
      />

      <label htmlFor="password" className="md:text-center">Password</label>
      <input
        type="password"
        placeholder="********"
        value={password}
        onChange={onPasswordChangeHandler}
        className="input-field"
        required="true"
      />
      <button type="submit" className="block w-full max-w-[30%] bg-[#2E277D] text-white mx-auto mt-12 py-3 rounded-md whitespace-nowrap">
        Sign up
      </button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
