import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';

function App() {
  const landingPage = '/*';
  const login = '/login';
  const register = '/register';
  const homePage = '/home';

  const authedUser = null;
  const loading = false;

  if (loading) {
    return null;
  }

  if (authedUser === null) {
    return (
      <Routes>
        <Route path={landingPage} element={<LandingPage />} />
        <Route path={login} element={<LoginPage />} />
        <Route path={register} element={<RegisterPage />} />
        <Route path={homePage} element={<HomePage />} />
      </Routes>
    );
  }

  return (
    <main>
      <Routes>
        <Route path={landingPage} element={<LandingPage />} />
        <Route path={login} element={<LoginPage />} />
        <Route path={register} element={<RegisterPage />} />
        <Route path={homePage} element={<HomePage />} />
      </Routes>
    </main>
  );
}

export default App;
