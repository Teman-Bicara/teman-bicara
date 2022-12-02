import React from 'react';
import { Link } from 'react-router-dom';

function LandingPageNav() {
  return (
    <nav className="flex">
      <img
        src="assets/image/logo-tebi.png"
        alt="logo teman bicara"
      />

      <ul className="">
        <li>
          <a href="#contact-us">Contact Us</a>
        </li>
        <li>
          <a href="#about-us">About Us</a>
        </li>
      </ul>

      <ul className="">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
}

export default LandingPageNav;
