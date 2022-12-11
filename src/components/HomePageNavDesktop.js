import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePageNavDesktop({ logout }) {
  return (
    <section className="bg-white shadow-lg font-inter">

      <div className="container mx-auto flex justify-between items-center">
        <img src="/assets/image/logo-tebi.svg" alt=" " />

        <div className="flex gap-16 mr-16 font-semibold">
          <Link
            to="/"
            className="min-w-[44px] min-h-[44px] px-4 rounded-md grid items-center hover:bg-secondary hover:text-white transition"
          >
            <span className="">
              Home
            </span>
          </Link>

          <Link
            to="/posts/new"
            className="min-w-[44px] min-h-[44px] px-4 rounded-md grid items-center hover:bg-secondary hover:text-white transition"
          >
            <span className="">
              Write
            </span>
          </Link>

          <Link
            onClick={logout}
            to="/"
            className="min-w-[44px] min-h-[44px] px-4 rounded-md grid items-center hover:bg-secondary hover:text-white transition"
          >
            <span>Logout</span>
          </Link>
        </div>
      </div>

    </section>
  );
}
