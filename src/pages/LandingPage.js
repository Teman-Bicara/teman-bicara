import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import LandingPageFooter from '../components/LandingPageFooter';
import LandingPageMain from '../components/LandingPageMain';
import LandingPageNav from '../components/LandingPageNav';

function LandingPage() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <>
      <header data-aos="fade-down" className="w-full fixed inset-x-0 top-0 bg-white shadow-md z-50">
        <LandingPageNav />
      </header>
      <main className="font-inter pt-20">
        <LandingPageMain />
      </main>
      <footer className="text-center bg-[#8C4AF7] font-poppins">
        <LandingPageFooter />
      </footer>
    </>
  );
}

export default LandingPage;
