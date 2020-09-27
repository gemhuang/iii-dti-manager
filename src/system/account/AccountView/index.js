import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Page from 'src/commons/component/Page';
import Profile from 'src/system/account/AccountView/Profile';
import ProfileDetails from 'src/system/account/AccountView/ProfileDetails';
import useStyles from './styles';

const Account = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Account">
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

export default Account;