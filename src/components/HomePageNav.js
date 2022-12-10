/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/prop-types */
import React from 'react';
import { AiOutlineHome, AiOutlineLogout } from 'react-icons/ai';
import { BsPlusCircle } from 'react-icons/bs';

export default function HomePageNav({ logout, username }) {
  return (
    <section id="bottom-navigation" className="bg-white shadow-lg">
      <div id="tabs" className="flex justify-between">
        <a href="/home" className="w-full focus:text-sky-500 hover:text-sky-400 justify-center inline-block text-center pt-2 pb-1">
          <AiOutlineHome className="h-8 w-8 inline-block mb-1" />
          <span className="tab tab-home block text-xs">
            Beranda
          </span>
        </a>
        <a href="/new/post" className="w-full focus:text-sky-500 hover:text-sky-400 justify-center inline-block text-center pt-2 pb-1">
          <BsPlusCircle className="h-8 w-8 inline-block mb-1" />
          <span className="tab tab-home block text-xs">
            Tambah
          </span>
        </a>
        <button onClick={logout} className="w-full focus:text-sky-500 hover:text-sky-400 justify-center inline-block text-center pt-2 pb-1">
          <AiOutlineLogout className="h-8 w-8 inline-block mb-1" />
          <span className="tab tab-home block text-xs">
            {username}
          </span>
        </button>
      </div>
    </section>
  );
}
