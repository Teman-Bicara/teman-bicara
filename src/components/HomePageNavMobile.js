import React from 'react';
import { AiOutlineHome, AiOutlineLogout } from 'react-icons/ai';
import { BsPlusCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function HomePageNavMobile({ logout, username }) {
  return (
    <section className="bg-white shadow-2xl flex justify-around p-2">
      <Link to="/" className="hover:text-[#834CDD] transition">
        <AiOutlineHome className="w-11 h-11 mx-auto" />
        <p className="text-center">
          Beranda
        </p>
      </Link>

      <Link to="/posts/new" className="hover:text-[#834CDD] transition">
        <BsPlusCircle className="w-11 h-11 mx-auto" />
        <p className="text-center">
          Tambah
        </p>
      </Link>

      <Link
        onClick={logout}
        to="/"
        className="hover:text-[#834CDD] transition"
      >
        <AiOutlineLogout className="w-11 h-11 mx-auto" />
        <p className="text-center capitalize">
          Hi,
          {' '}
          {username}
        </p>
      </Link>
    </section>
  );
}
