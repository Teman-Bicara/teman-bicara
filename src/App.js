import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  const login = '/*';
  const register = '/register';

  return (
    <main>
      <Routes>
        <Route path={login} element={<LoginPage />} />
        <Route path={register} element={<RegisterPage />} />
      </Routes>
    </main>
  );
}

export default App;
