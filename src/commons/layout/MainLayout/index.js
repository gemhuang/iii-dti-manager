import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from 'src/commons/layout/MainLayout/TopBar';
import useStyles from './styles';

const MainLayout = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopBar />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
