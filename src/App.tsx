import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; 
import SidebarHeader from './components/SidebarHeader';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ROUTES from './routes/MainRoutes'; 
import AUTH from './routes/AuthRoutes';
import AboutPage from './pages/AboutPage';
import ProfilPage from './pages/ProfilPage';
import ConsultantsPage from './pages/ConsultantsPage';
import DietListPage from './pages/DietListPage';
import AppointmentsPage from './pages/AppointmentsPage';
import './App.css'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<SidebarHeader />}>
            <Route index element={<HomePage />} />
            <Route path={ROUTES.find(route => route.name === 'About')?.path || '/'} element={<AboutPage />} />
            <Route path={ROUTES.find(route => route.name === 'Consultants')?.path || '/'} element={<ConsultantsPage />} />
            <Route path={ROUTES.find(route => route.name === 'Diet List')?.path || '/'} element={<DietListPage />} />
            <Route path={ROUTES.find(route => route.name === 'Appointments')?.path || '/'} element={<AppointmentsPage />} />
            <Route path={AUTH.find(route => route.name === 'Profile')?.path || '/'} element={<ProfilPage />} />
          </Route>
          <Route path={AUTH.find(route => route.name === 'Login')?.path || '/'} element={<LoginPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
