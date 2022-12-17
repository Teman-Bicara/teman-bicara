import axios from 'axios';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { BiArrowBack } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import CONFIG from '../global/config';

export default function AddPage() {
  const navigate = useNavigate();

  const [desc, setDesc] = useState();

  const onInputHandler = (e) => {
    setDesc(e.target.innerHTML);
  };

  const onClickHandler = async () => {
    const token = localStorage.getItem('accessToken');
    try {
      await axios.post(`${CONFIG.BASE_URL}/api/posts`, {
        data: {
          desc,
        },
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      [{ script: 'sub' }, { script: 'super' }],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }, { align: [] }],
      ['link', 'image', 'video'],
      ['clean'],
    ],
  };

  return (
    <div className="mx-auto max-w-2xl w-[80%] py-10">
      <div className="flex justify-between mb-8">
        <Link to="/">
          <BiArrowBack className="w-11 h-11" />
        </Link>
        <button
          onClick={onClickHandler}
          type="submit"
          className="text-white bg-[#4949C9] px-6 py-2 rounded-xl hover:scale-110 transition-all"
        >
          Publish
        </button>
      </div>

      <div className="flex gap-4">
        <img className="rounded-full w-10 h-10" src="/assets/image/profildefault.png" alt=" " width="100%" height="auto" />
        <ReactQuill modules={modules} placeholder="Write your story here..." theme="snow" value={desc} onChange={setDesc} onInput={onInputHandler} />
      </div>
    </div>
  );
}
