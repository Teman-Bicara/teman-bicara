import React from 'react';
import { AiOutlineHome, AiOutlineLogout } from 'react-icons/ai';
import { BsPlusCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function HomePageNavMobile({ logout, username }) {
  return (
    <section className="bg-white shadow-2xl flex justify-around p-2">
      <Link to="/" className="hover:text-secondary transition">
        <AiOutlineHome className="w-9 h-9 mx-auto text-[#86838B] hover:text-secondary" />
        <p className="text-center">
          Home
        </p>
      </Link>

      <Link to="/posts/new" className="hover:text-secondary transition">
        <BsPlusCircle className="w-9 h-9 mx-auto text-[#86838B] hover:text-secondary" />
        <p className="text-center">
          Write
        </p>
      </Link>

      <Link
        onClick={logout}
        to="/"
        className="hover:text-secondary transition"
      >
        <AiOutlineLogout className="w-9 h-9 mx-auto text-[#86838B] hover:text-secondary" />
        <p className="text-center capitalize">
          Hi,
          {' '}
          {username}
        </p>
      </Link>
    </section>
  );
}
