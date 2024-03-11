import { render, fireEvent, screen } from '@testing-library/react';
import RightTopTooltip from './RightTopTooltip';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

// Mocking the theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5', // Mock primary color
    },
    secondary: {
      main: '#f50057', // Mock secondary color
    },
    warning: {
      main: '#ff9800', // Mock warning color
    },
    success: {
      main: '#4caf50', // Mock success color
    },
    info: {
      main: '#2196f3', // Mock info color
    },
  },
});

test('renders RightTopTooltip correctly', () => {
  render(
    <Router> {/* Wrap component with Router */}
      <ThemeProvider theme={theme}>
        <RightTopTooltip />
      </ThemeProvider>
    </Router>
  );

  
  // Ensure menus are closed
  expect(screen.queryByText('My Profile')).not.toBeInTheDocument();
  expect(screen.queryByText('Alisa\'s birthday today. Celebrate it now')).not.toBeInTheDocument();
});

