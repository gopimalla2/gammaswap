import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
      mode: 'light',
    primary: {
      main: '#4caf50',
    },
    secondary: {
      main: '#f44336',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
      mode: 'dark',
    primary: {
      main: '#4caf50',
    },
    secondary: {
      main: '#f44336',
    },
  },
});
