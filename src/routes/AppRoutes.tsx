import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ProfilPage from '../pages/ProfilPage';
import ConsultantsPage from '../pages/ConsultantsPage';
import DietListPage from '../pages/DietListPage';
import AppointmentsList from '../pages/AppointmentsPage';


const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile" element={<ProfilPage />} />
        <Route path="/consultantslist" element={<ConsultantsPage />} />
        <Route path="/dietlist" element={<DietListPage />} />
        <Route path="/appointments" element={<AppointmentsList />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
