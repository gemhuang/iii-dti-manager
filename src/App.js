import React from 'react';
import 'react-perfect-scrollbar/dist/css/styles.css';

import { useRoutes } from 'react-router-dom';
import routes from './routes';

import './App.scss';

const App = () => {
  const routing = useRoutes(routes);

  return (
    <div>{routing}</div>
  );
};

export default App;
