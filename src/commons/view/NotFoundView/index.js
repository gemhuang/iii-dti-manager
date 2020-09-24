import React from 'react';
import { Box, Container, Typography, makeStyles } from '@material-ui/core';
import Page from 'src/commons/component/Page';
import useStyles from './styles';

const NotFoundView = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="404">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="md">
          <Typography align="center" color="textPrimary" variant="h1">
            404: 該頁面不存在
          </Typography>
          <Typography align="center" color="textPrimary" variant="subtitle2">
            你所連結的頁面不存在，請確認連結網址是否正確。
          </Typography>
        </Container>
      </Box>
    </Page>
  );
};

export default NotFoundView;
