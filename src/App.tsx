import React, { useState } from 'react';
import styles from './App.module.scss';
import { ThemeProvider } from '@material-ui/core/styles';
import { lightTheme, darkTheme } from './theme';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <div className={styles.myClassName}>Hey</div>;
    </ThemeProvider>
  );
};

export default App;
