import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Sidebar from './index';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';

// Mocking the theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5', // Mock primary color
    },
    secondary: {
      main: '#f50057', // Mock secondary color
    },
  },
});

test('renders Sidebar correctly', () => {
 render(
    <Router>
      <ThemeProvider theme={theme}>
        <Sidebar />
      </ThemeProvider>
    </Router>
  );

  // Add your assertions here
  const appBar = screen.getByTestId('app-bar');
  expect(appBar).toBeInTheDocument();

  const drawerHeader = screen.getByTestId('drawer-header');
  expect(drawerHeader).toBeInTheDocument();

  const logo = screen.getByAltText('Logo');
  expect(logo).toBeInTheDocument();

  // Test clicking on elements if needed
  // For example, if you have a button that toggles the drawer
  const menuButton = screen.getByTestId('menu-button');
  fireEvent.click(menuButton);
  expect(drawerHeader).not.toBeInTheDocument();
});
