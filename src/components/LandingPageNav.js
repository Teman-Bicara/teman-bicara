import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LandingPageNav() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav className="flex justify-between items-center mx-auto md:max-w-[90%]">
      <img
        src="assets/image/logo-tebi.svg"
        alt="logo teman bicara"
      />

      <button className="xs:mr-6 xs:relative xs:z-40 sm:hidden" onClick={() => setOpenNav(!openNav)}>
        {openNav
          ? <img src="/assets/icons/circle-cross.svg" alt=" " width="44px" height="44px" />
          : <img src="/assets/icons/hamburger-menu.svg" alt=" " width="44px" height="44px" />}
      </button>

      <div className={`font-bold xs:font-montserrat xs:absolute xs:top-0 xs:bottom-0 xs:z-30 xs:w-[80%] xs:h-screen xs:bg-white xs:px-6 xs:pt-5 xs:shadow-xl xs:transition-all xs:duration-500
      ${openNav ? 'xs:right-0' : 'xs:right-[-100%] xs:opacity-0'} sm:flex sm:justify-between sm:w-[70%] xl:w-[60%]`}
      >
        <p className="text-2xl mb-14 sm:hidden">Menu</p>
        <ul className="sm:flex">
          <li className="xs:mb-2">
            <a
              href="#contact-us"
              className="xs:block xs:w-full transition hover:bg-primary hover:text-white p-4 rounded-md whitespace-nowrap"
            >
              Contact Us
            </a>
          </li>
          <hr className="bg-[#DADADA] mb-6 sm:hidden" />
          <li className="xs:mb-2 sm:ml-1">
            <a
              href="#about-us"
              className="xs:block xs:w-full transition hover:bg-primary hover:text-white p-4 rounded-md whitespace-nowrap"
            >
              About Us
            </a>
          </li>
          <hr className="bg-[#DADADA] mb-6 sm:hidden" />
        </ul>
        <ul className="sm:flex">
          <li className="xs:mb-2">
            <Link
              to="/login"
              className="xs:block xs:w-full transition xs:hover:bg-primary xs:hover:text-white xs:p-4 xs:rounded-md whitespace-nowrap
            sm:text-primary sm:border-2 sm:border-primary sm:px-6 sm:py-1 sm:rounded-3xl sm:hover:bg-primary sm:hover:text-white"
            >
              Login
            </Link>
          </li>
          <hr className="bg-[#DADADA] mb-6 sm:hidden" />
          <li className="xs:mb-2">
            <Link
              to="/register"
              className="xs:block xs:w-full transition xs:hover:bg-primary hover:text-white xs:p-4 xs:rounded-md whitespace-nowrap
              sm:text-white sm:border-2 sm:border-primary sm:px-6 sm:py-1 sm:rounded-3xl sm:bg-gradient-to-r sm:from-primary sm:to-[#6C53FF] sm:ml-4"
            >
              Sign Up
            </Link>
          </li>
          <hr className="bg-[#DADADA] mb-6 sm:hidden" />
        </ul>
      </div>
    </nav>
  );
}

export default LandingPageNav;
