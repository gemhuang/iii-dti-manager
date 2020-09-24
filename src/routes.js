import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/commons/layout/DashboardLayout';
import MainLayout from 'src/commons/layout/MainLayout';
import { NotFoundView } from 'src/commons/view/NotFoundView';
import LoginView from 'src/auth/LoginView';
import RegisterView from 'src/auth/RegisterView';
import AccountView from 'src/system/account/Account';
import SettingsView from 'src/system/setting/SettingsView';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'settings', element: <SettingsView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      // { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: 'login',
    element: <LoginView />,
    children: []
  },
  {
    path: 'register',
    element: <RegisterView />,
    children: []
  }
];

export default routes;
