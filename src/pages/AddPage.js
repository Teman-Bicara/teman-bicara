import axios from 'axios';
import React, { useState } from 'react';
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
          Kirim
        </button>
      </div>

      <div className="flex gap-4">
        <img className="rounded-full w-10 h-10" src="/assets/image/profildefault.png" alt=" " width="100%" height="auto" />
        <div
          data-placeholder="Mau cerita apa hari ini?"
          contentEditable="true"
          className="w-full h-40 shadow-xl rounded-lg border p-4"
          onInput={onInputHandler}
        />
      </div>
    </div>
  );
}
