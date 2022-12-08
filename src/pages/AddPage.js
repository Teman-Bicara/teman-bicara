import React from 'react';
import AddPost from '../components/AddPost';
import HomePageNav from '../components/HomePageNav';

export default function AddPage() {
  return (
    <>
      <header className="xs:hidden">
        ini header saat desktop
      </header>
      <main>
        <AddPost />
      </main>
      <footer className="border shadow-2xl fixed inset-x-0 bottom-0 z-10 sm:hidden">
        <HomePageNav />
      </footer>
    </>
  );
}
