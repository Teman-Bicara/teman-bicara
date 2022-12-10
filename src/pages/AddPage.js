import React from 'react';
import AddPost from '../components/AddPost';

export default function AddPage() {
  return (
    <>
      <header className="xs:hidden">
        ini header saat desktop
      </header>
      <main>
        <AddPost />
      </main>
    </>
  );
}
