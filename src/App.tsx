import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; 
import Sidebar from './components/Sidebar';
import LoginPage from './pages/LoginPage';
import './App.css'
import HomePage from './pages/HomePage';
import routes from './routes/routes';
import AboutPage from './pages/AboutPage';
import ProfilPage from './pages/ProfilPage';
import ConsumersList from './pages/ConsumersList';
import DietList from './pages/DietList';
import AppointmentsPage from './pages/AppointmentsPage';


const App: React.FC = () => {
 

    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Sidebar />}>
              <Route index element={<HomePage />} />
              <Route path={routes.ABOUT} element={<AboutPage />} />
              <Route path={routes.CONSUMERS_LIST} element={<ConsumersList />} />
              <Route path={routes.DIET_LIST} element={<DietList />} />
              <Route path={routes.APPOINTMENTS} element={<AppointmentsPage />} />
              <Route path={routes.PROFILE} element={<ProfilPage />} />
            </Route>
            <Route path={routes.LOGIN} element={<LoginPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    );
  };
  
export default App;