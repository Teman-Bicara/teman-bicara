import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePageNav from './components/HomePageNav';
import AddPage from './pages/AddPage';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  const landingPage = '/*';
  const homePage = '/*';
  const login = '/login';
  const register = '/register';
  const addPage = '/new/post';

  const [authedUser, setAuthedUser] = useState(null);

  // if (loading) {
  //   return null;
  // }

  // hapus kalau udah selesai slicing
  const slicing = true;
  if (slicing) {
    return (
      <LandingPage />
    );
  }
  // hapus kalau udah selesai slicing

  const onLoginSucces = ({ jwt, user }) => {
    setAuthedUser(user);
    localStorage.setItem('accessToken', jwt);

    console.log(authedUser);
  };

  const onLogout = () => {
    localStorage.setItem('accessToken', '');

    setAuthedUser(null);
  };

  if (authedUser === null) {
    return (
      <main>
        <Routes>
          <Route path={landingPage} element={<LandingPage />} />
          <Route path={login} element={<LoginPage loginSuccess={onLoginSucces} />} />
          <Route path={register} element={<RegisterPage />} />
        </Routes>
      </main>
    );
  }

  return (
    <>
      <main>
        <Routes>
          <Route path={homePage} element={<HomePage />} />
          <Route path={addPage} element={<AddPage />} />
        </Routes>
      </main>
      <footer>
        <HomePageNav logout={onLogout} username={authedUser.username || ''} />
      </footer>
    </>
  );
}

export default App;
