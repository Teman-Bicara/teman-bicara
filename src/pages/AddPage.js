import React from 'react';
import { BiArrowBack } from 'react-icons/bi';

export default function AddPage() {
  return (
    <div>
      <BiArrowBack className="w-8 h-8 mt-5 ml-2" />
      <textarea className="flex w-[296px] h-[177px] ml-10 mt-10 border font-inter font-semibold text-slate-800" placeholder="mau cerita apa hari ini?" />
      <button type="submit" className="bg-[#4949C9] text-white mt-5 w-[74px] h-8 ml-64 rounded-lg hover:opacity-80 cursor-pointer">Kirim</button>
    </div>
  );
}
