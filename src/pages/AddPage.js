import axios from 'axios';
import React, { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import CONFIG from '../global/config';

export default function AddPage() {
  const navigate = useNavigate();

  const [desc, setDesc] = useState();

  const onInputHandler = (e) => {
    setDesc(e.target.innerHTML);
  };

  const onClickHandler = async (event) => {
    event.preventDefault();
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
    <>
      <BiArrowBack className="w-8 h-8 mt-5 ml-2" />
      <div
        data-placeholder="Sebenarnya saya adalah ...."
        contentEditable="true"
        className="flex w-[296px] h-[177px] ml-10 mt-10 border font-inter text-slate-800"
        placeholder="mau cerita apa hari ini?"
        onInput={onInputHandler}
      />
      <button
        onClick={onClickHandler}
        type="submit"
        className="bg-[#4949C9] text-white mt-5 w-[74px] h-8 ml-64 rounded-lg hover:opacity-80 cursor-pointer"
      >
        Kirim
      </button>
    </>
  );
}
