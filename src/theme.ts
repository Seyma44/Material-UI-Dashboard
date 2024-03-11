import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    customPurple?: string;
    customColor2?: {
      main: string;
    };
  }
  interface PaletteOptions {
    customPurple?: string;
    customColor2?: {
      main: string;
    };
  }
}

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
      fontSize: '0.875rem',
      fontWeight: 400,
      color: '#ccc',
    },
    subtitle2: {
      fontSize: '0.75rem',
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
    
  },
  palette: {
    primary: {
      light:'#b800d8',
      main: '#800080',
    },
    secondary:{
       light:'#b800d8', 
        main:'#e5cee6'
    },
    info: {
      light:'#b0cdeb',
      main: '#2e96ff', 
    },
    success: {
      light:'#cae0c8',
      main: '#53af4c', 
    },
    warning: {
      light:'#fae7c5',
      main: '#ff9800', 
    },
    error: {
      light:'#eb3b3b',
      main: '#b31515', 
    },
    customColor2:{
      main:'#3200d8'    
    },
    customPurple: '#b800d8', 
    common: {
      black: '#000',
      white: '#fff',
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        colorSecondary: {
          backgroundColor: '#b800d8',
        },
      },
    },
  },
  },
);

export default theme;
