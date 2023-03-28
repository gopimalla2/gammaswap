import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Box from '@mui/material/Box';

import styles from './App.module.scss';
import { lightTheme, darkTheme } from './theme';
import PoolGrid from './components/pool-grid';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <Box
        className={styles.container}
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <PoolGrid />
      </Box>
    </ThemeProvider>
  );
};

export default App;
