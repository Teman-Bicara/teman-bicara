import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function AddPost({ addNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const onBodyHandler = (e) => {
    setBody(e.target.innerHTML);
  };

  const onSubmitHandler = () => {
    addNote({ title, body });
  };
  return (
    <div>AddPost</div>
  );
}

AddPost.propTypes = {
  addNote: PropTypes.func.isRequired,
};
