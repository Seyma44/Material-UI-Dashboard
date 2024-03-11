import React from 'react';
import { render,screen } from '@testing-library/react';
import HeaderContainer from './HeaderContainer';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Mocking the theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5', // Mock primary color
    },
    secondary: {
      main: '#f50057', // Mock secondary color
    },
    common: {
      black: '#000000', // Mock common color
    },
  },
});

test('renders HeaderContainer correctly', () => {
  render(
    <ThemeProvider theme={theme}>
      <HeaderContainer />
    </ThemeProvider>
  );

  // Check if the component renders with the correct content
  expect(screen.getByText('25 days left')).toBeInTheDocument();

  // Check if the icon is rendered with the correct color and size
 
});
