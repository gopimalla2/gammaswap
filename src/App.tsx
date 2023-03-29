import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';

import styles from './App.module.scss';
import { lightTheme, darkTheme } from './theme';
import PoolGrid from './components/pool-grid';

const App = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
