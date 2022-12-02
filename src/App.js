import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  const landingPage = '/*';
  const login = '/login';
  const register = '/register';

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
      </Routes>
    );
  }

  return (
    <main>
      <Routes>
        <Route path={landingPage} element={<LandingPage />} />
        <Route path={login} element={<LoginPage />} />
        <Route path={register} element={<RegisterPage />} />
      </Routes>
    </main>
  );
}

export default App;
