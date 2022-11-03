import LoginPage from './pages/LoginPage';
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1 className="text-center text-3xl text-teal-500">
        Tes Tailwind yagesya
      </h1>
      <div className="mt-10 flex items-center justify-center hover:animate-bounce">
        <div className="h-14 w-14 bg-sky-500 shadow-lg"></div>
        <div className="h-14 w-14 bg-red-500 shadow-lg"></div>
        <div className="h-14 w-14 bg-cyan-500 shadow-lg"></div>
      </div>
      <main>
        <LoginPage />
      </main>
    </div>
  );
}

export default App;
