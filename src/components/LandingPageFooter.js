import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function LandingPageFooter() {
  return (
    <div className="relative overflow-hidden" id="contact-us">
      <hr className="absolute left-0 right-0 top-14 h-2 bg-white z-10" />

      <div className="relative z-20">
        <p className="mt-12 mx-auto px-4 font-bold font-montserrat bg-primary w-fit">Get in touch with us</p>
        <p className="mt-8 mb-2 text-white">Contact us</p>
        <ul className="flex gap-4 justify-center">
          <li>
            <a href="mailto:tebicara@gmail.com" target="_blank" rel="noreferrer">
              <LazyLoadImage src="/assets/icons/email.svg" alt="logo email " width="44px" height="44px" />
            </a>
          </li>
        </ul>

        <p className="mt-4 mb-2 text-white">Follow us</p>
        <ul className="flex gap-4 justify-center">
          <li>
            <a href="https://github.com/Teman-Bicara" target="_blank" rel="noreferrer">
              <LazyLoadImage src="/assets/icons/github.svg" alt="logo github" width="44px" height="44px" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCkXQBg8Y0CREUZtRUzt8IFA" target="_blank" rel="noreferrer">
              <LazyLoadImage src="/assets/icons/youtube.svg" alt="logo youtube" width="44px" height="44px" />
            </a>
          </li>
        </ul>
        <div className="flex justify-center items-center pt-40">
          <LazyLoadImage
            src="/assets/image/logo-tebi.svg"
            alt="logo teman bicara"
            className="mx-[-1.25rem]"
          />
          <p className="font-bold mt-3">All Rights Reserved</p>
        </div>
      </div>
      <div className="absolute bottom-12 sm:bottom-0 left-0 right-0 z-10">
        <LazyLoadImage
          src="/assets/image/footer2.svg"
          alt="gambar footer"
          className="scale-y-[3] scale-x-125 sm:scale-100"
        />
      </div>
    </div>
  );
}

export default LandingPageFooter;
