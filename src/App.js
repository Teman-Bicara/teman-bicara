import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePageNav from './components/HomePageNav';
import CONFIG from './global/config';
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
  const [loading, setLoading] = useState(true);

  // // hapus kalau udah selesai slicing
  // const slicing = true;
  // if (slicing) {
  //   return (
  //     <AddPage />
  //   );
  // }
  // // hapus kalau udah selesai slicing

  useEffect(() => {
    const fetchGetUserLogged = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const res = await axios.get(`${CONFIG.BASE_URL}/api/users/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setAuthedUser(res.data);
        setLoading(false);
      } catch (err) {
        alert(err);
      }
    };

    fetchGetUserLogged();
  }, []);

  const onLoginSucces = ({ jwt, user }) => {
    localStorage.setItem('accessToken', jwt);

    setAuthedUser(user);
  };

  const onLogout = () => {
    localStorage.setItem('accessToken', '');

    setAuthedUser(null);
  };

  if (loading) {
    return null;
  }

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
      <header>
        <HomePageNav logout={onLogout} username={authedUser.username} />
      </header>
      <main>
        <Routes>
          <Route path={homePage} element={<HomePage />} />
          <Route path={addPage} element={<AddPage />} />
        </Routes>
      </main>
      <footer>
        <HomePageNav logout={onLogout} username={authedUser.username} />
      </footer>
    </>
  );
}

export default App;
