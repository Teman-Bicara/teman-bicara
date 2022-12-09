import React from 'react';
import HomePageNav from '../components/HomePageNav';
import HomePageMain from '../components/HomePageMain';

export default function HomePage() {
  return (
    <>
      <header>
        <img src="assets/image/home.svg" alt="" className="relative w-[375px] h-[132px] left-0 top-0" />
        <p className="absolute w-[121px] h-[44px] left-[74px] top-11 font-semibold text-base">Selamat Datang, Laida Lavenia...</p>
      </header>
      <main>
        <HomePageMain />
      </main>
      <footer>
        <HomePageNav />
      </footer>
    </>
  );
}
