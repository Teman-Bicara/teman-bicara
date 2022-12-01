import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  const login = '/*';
  const register = '/register';

  return (
    <div className="min-h-screen">
      <main>
        <Routes>
          <Route
            path={login}
            element={<LoginPage />}
          />
          <Route path={register} element={<RegisterPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
