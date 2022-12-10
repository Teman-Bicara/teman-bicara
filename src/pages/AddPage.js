/* eslint-disable no-undef */
import React from 'react';
import { AiOutlineHome, AiOutlineLogout } from 'react-icons/ai';
import { BsPlusCircle } from 'react-icons/bs';
import AddPost from '../components/AddPost';

export default function AddPage() {
  return (
    <>
      <header className="xs:hidden">
        <section id="bottom-navigation" className="bg-white shadow-lg">
          <div id="tabs" className="flex justify-between">
            <a href="/home" className="w-full focus:text-sky-500 hover:text-sky-400 justify-center inline-block text-center pt-2 pb-1">
              <AiOutlineHome className="h-8 w-8 inline-block mb-1" />
              <span className="tab tab-home block text-xs">
                Home
              </span>
            </a>
            <a href="/new/post" className="w-full focus:text-sky-500 hover:text-sky-400 justify-center inline-block text-center pt-2 pb-1">
              <BsPlusCircle className="h-8 w-8 inline-block mb-1" />
              <span className="tab tab-home block text-xs">
                Write
              </span>
            </a>
            <button className="w-full focus:text-sky-500 hover:text-sky-400 justify-center inline-block text-center pt-2 pb-1">
              <AiOutlineLogout className="h-8 w-8 inline-block mb-1" />
              <span className="tab tab-home block text-xs">
                Logout
              </span>
            </button>
          </div>
        </section>
      </header>
      <main>
        <AddPost />
      </main>
    </>
  );
}
