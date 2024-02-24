import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; 
import Sidebar from './components/Sidebar';
import LoginPage from './pages/LoginPage';
import './App.css'

const App: React.FC = () => {
  const isLoggedIn = false; // Your condition to determine if the user is logged in

  return (
    <ThemeProvider theme={theme}>
      {isLoggedIn ? ( // Check if the user is logged in
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Router>
      ) : (
        <Sidebar/>
      )}
    </ThemeProvider>
  );
};

export default App;
