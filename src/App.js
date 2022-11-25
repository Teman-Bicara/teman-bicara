import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import React from 'react';
import {  Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/register">
        <RegisterPage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
    </Routes>
  );
}

export default App;
