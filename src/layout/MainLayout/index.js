import React from 'react';

import { AppHeader } from 'src/component/AppHeader';

import { Button, Content } from 'carbon-components-react';

export default function MainLayout() {
  return (
    <>
      <AppHeader title={"DTI Manager"} url={"/"} />
      <Content>
        <Button>Hi!</Button>
      </Content>
    </>
  );
}
