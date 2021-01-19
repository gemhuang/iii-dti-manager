import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppHeader } from 'src/component/AppHeader';

import { Button, Content } from 'carbon-components-react';

import moment from 'moment';

export default function MainLayout() {
  const dispatch = useDispatch();
  const now = useSelector((state) => moment(state.main.now));
  const getNow = (e) => {
    dispatch({ type: 'now' });
  };

  return (
    <>
      <AppHeader title={"DTI Manager"} url={"/"} />
      <Content>
        <Button onClick={getNow}>Get Now!</Button>
        <div>{now.format()}</div>
      </Content>
    </>
  );
}
