import React from 'react';

function LandingPageFooter() {
  return (
    <div className="relative">
      <p>Get in touch with us</p>
      <p>Contact us</p>
      <ul>
        <li>
          <a href="email">email</a>
        </li>
        <li>
          <a href="website">website</a>
        </li>
      </ul>
      <p>Follow us</p>
      <ul>
        <li>
          <a href="linkedin">linkedin</a>
        </li>
        <li>
          <a href="github">github</a>
        </li>
        <li>
          <a href="figma">figma</a>
        </li>
        <li>
          <a href="instagram">instagram</a>
        </li>
        <li>
          <a href="youtube">youtube</a>
        </li>
      </ul>
      <div className="flex justify-center items-end mt-32 mb-4">
        <img
          src="assets/image/logo-tebi.png"
          alt="logo teman bicara"
          className="inline-block mx-[-1.5rem] mb-[-5rem]"
        />
        <p className="font-bold">All Rights Reserved</p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 max-h-52 -z-10">
        <img
          src="assets/image/footer2.svg"
          alt=" "
          className="scale-y-150"
        />
      </div>
    </div>
  );
}

export default LandingPageFooter;
