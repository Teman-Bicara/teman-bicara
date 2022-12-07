import React from 'react';
import AddPost from '../components/AddPost';
import HomePageNav from '../components/HomePageNav';

export default function AddPage() {
  return (
    <>
      <main>
        <AddPost />
      </main>
      <footer>
        <HomePageNav />
      </footer>
    </>
  );
}
