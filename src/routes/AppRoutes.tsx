import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ProfilPage from '../pages/ProfilPage';
import ConsumersList from '../pages/ConsumersList';
import DietList from '../pages/DietList';
import AppointmentsPage from '../pages/AppointmentsPage';


const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile" element={<ProfilPage />} />
        <Route path="/consumerslist" element={<ConsumersList />} />
        <Route path="/dietlist" element={<DietList />} />
        <Route path="/appointments" element={<AppointmentsPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
