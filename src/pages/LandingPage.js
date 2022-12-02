import React from 'react';
import LandingPageFooter from '../components/LandingPageFooter';
import LandingPageMain from '../components/LandingPageMain';
import LandingPageNav from '../components/LandingPageNav';

function LandingPage() {
  return (
    <>
      <header className="container mx-auto outline">
        <LandingPageNav />
      </header>
      <main className="container mx-auto h-screen">
        <LandingPageMain />
      </main>
      <footer className="text-center bg-[#8C4AF7]">
        <LandingPageFooter />
      </footer>
    </>
  );
}

export default LandingPage;
