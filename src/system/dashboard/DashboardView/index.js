import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Page from 'src/commons/component/Page';

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Dashboard">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} xs={12}>
            <Profile />
          </Grid>
          <Grid item lg={8} md={6} xs={12}>
            <ProfileDetails />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
