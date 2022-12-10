import axios from 'axios';
import React, { useRef } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate, useParams } from 'react-router-dom';
import CONFIG from '../global/config';

export default function AddPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const descRef = useRef();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(`${CONFIG.BASE_URL}/api/comments`, {
        post: id,
        comment: 'semoga cepat sembuh',
        commenter: 'anon',
      });

      console.log(res);

      navigate('/');
    } catch (err) {
      alert(err);
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <BiArrowBack className="w-8 h-8 mt-5 ml-2" />
      <textarea
        ref={descRef}
        className="flex w-[296px] h-[177px] ml-10 mt-10 border font-inter font-semibold text-slate-800"
        placeholder="mau cerita apa hari ini?"
      />
      <button
        type="submit"
        className="bg-[#4949C9] text-white mt-5 w-[74px] h-8 ml-64 rounded-lg hover:opacity-80 cursor-pointer"
      >
        Kirim
      </button>
    </form>
  );
}
