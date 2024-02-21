import { createTheme } from '@mui/material/styles';

// Define your custom theme
const theme = createTheme({
  typography: {
    fontFamily: [
      'Titillium Web',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 400,
      color: '#eee',
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      color: '#ddd',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },
    // Add other typography variants as needed
  },
  palette: {
    primary: {
      main: '#800080',
    },
    secondary:{
        main:'#e5cee6'
    },
    success: {
      main: '#4caf50', // Green color for success
    },
    warning: {
      main: '#ff9800', // Orange color for warning
    },
    // Add other palette colors as needed
  },
});

export default theme;
