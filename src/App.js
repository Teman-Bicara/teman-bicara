import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddPost from './pages/AddPage';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  const landingPage = '/*';
  const login = '/login';
  const register = '/register';
  const homePage = '/home';
  const addPost = '/new/post';

  const authedUser = null;
  const loading = false;

  if (loading) {
    return null;
  }

  // hapus kalau udah selesai slicing
  // const slicing = true;
  // if (slicing) {
  //   return (
  //     <AddPost />
  //   );
  // }
  // hapus kalau udah selesai slicing

  if (authedUser === null) {
    return (
      <Routes>
        <Route path={landingPage} element={<LandingPage />} />
        <Route path={login} element={<LoginPage />} />
        <Route path={register} element={<RegisterPage />} />
        <Route path={homePage} element={<HomePage />} />
        <Route path={addPost} element={<AddPost />} />
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
        <Route path={addPost} element={<AddPost />} />
      </Routes>
    </main>
  );
}

export default App;
