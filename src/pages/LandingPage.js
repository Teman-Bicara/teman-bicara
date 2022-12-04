import React from 'react';
import LandingPageFooter from '../components/LandingPageFooter';
import LandingPageMain from '../components/LandingPageMain';
import LandingPageNav from '../components/LandingPageNav';

function LandingPage() {
  return (
    <>
      <header className="w-full mx-auto md:max-w-[90%]">
        <LandingPageNav />
      </header>
      <main className="font-inter">
        <LandingPageMain />
      </main>
      <footer className="text-center bg-[#8C4AF7] font-poppins">
        <LandingPageFooter />
      </footer>
    </>
  );
}

export default LandingPage;
