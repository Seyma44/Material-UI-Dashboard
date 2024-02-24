// routes/LoginRoutes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';

const LoginRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    </Router>
  );
};

export default LoginRoutes;
