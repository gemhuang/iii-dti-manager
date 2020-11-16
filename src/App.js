import React from 'react';
import 'react-perfect-scrollbar/dist/css/styles.css';

import { ThemeProvider, createMuiTheme } from '@material-ui/core';

import { useRoutes } from 'react-router-dom';
import routes from './routes';

const App = () => {
  const routing = useRoutes(routes);
  const theme = createMuiTheme();

  return (
    <ThemeProvider theme={theme}>
      {routing}
    </ThemeProvider>
  );
};

export default App;
