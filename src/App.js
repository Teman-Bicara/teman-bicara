import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePageNav from './components/HomePageNav';
import CONFIG from './global/config';
import AddPage from './pages/AddPage';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  const landingPage = '/*';
  const homePage = '/*';
  const login = '/login';
  const register = '/register';
  const addPage = '/posts/new';
  const detail = '/posts/:id';

  const [authedUser, setAuthedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    const fetchGetUserLogged = async () => {
      try {
        const res = await axios.get(`${CONFIG.BASE_URL}/api/users/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setAuthedUser(res.data);
      } catch (err) {
        alert(err);
      }
    };

    if (token) {
      fetchGetUserLogged();
    }

    setLoading(false);
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
          <Route path={detail} element={<DetailPage />} />
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
