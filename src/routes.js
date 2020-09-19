import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/commons/layout/DashboardLayout';
import MainLayout from 'src/commons/layout/MainLayout';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
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
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
