import './App.css';
import PersistentDrawerLeft from './components/Sidebar';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Import your custom theme

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <PersistentDrawerLeft />
    </ThemeProvider>
  );
};

export default App;
