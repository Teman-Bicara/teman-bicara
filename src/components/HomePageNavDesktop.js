import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePageNavDesktop({ logout }) {
  return (
    <section className="bg-white shadow-lg">

      <div className="container mx-auto flex justify-between items-center">
        <img src="assets/image/logo-tebi.svg" alt=" " />

        <div className="flex gap-16 mr-16">
          <Link
            to="/"
            className=""
          >
            <span className="">
              Home
            </span>
          </Link>

          <Link
            to="/posts/new"
            className=""
          >
            <span className="">
              Write
            </span>
          </Link>

          <Link
            onClick={logout}
            to="/"
            className=""
          >
            <span>Logout</span>
          </Link>
        </div>
      </div>

    </section>
  );
}
