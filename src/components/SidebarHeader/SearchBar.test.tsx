import React from 'react';
import { render,screen } from '@testing-library/react';
import SearchBar from './SearchBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Mocking the theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#b800d8', // Mock primary color
    },
    secondary: {
      main: '#e5cee6', // Mock secondary color
    },
    common: {
      white: '#ffffff', // Mock common white color
    },
  },
});

test('renders SearchBar correctly on desktop', () => {
  render(
    <ThemeProvider theme={theme}>
      <SearchBar isMobile={false} />
    </ThemeProvider>
  );

  // Check if the search input and icon are rendered
  const searchInput = screen.getByPlaceholderText('Search...');
  expect(searchInput).toBeInTheDocument();
});

test('does not render SearchBar on mobile by default', () => {
 render(
    <ThemeProvider theme={theme}>
      <SearchBar isMobile={true} />
    </ThemeProvider>
  );

  // Check if the search input and icon are not rendered on mobile
  const searchInput = screen.queryByPlaceholderText('Search...');
  expect(searchInput).toBeNull();
});
