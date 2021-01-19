import React from 'react';
import 'react-perfect-scrollbar/dist/css/styles.css';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import MainLayout from 'src/layout/MainLayout';

import './App.scss';

const App = () => {


  return (
    <Switch>
      <Route path="/" component={MainLayout} />
      <Redirect to="/" />
    </Switch>
  );
};

export default App;
