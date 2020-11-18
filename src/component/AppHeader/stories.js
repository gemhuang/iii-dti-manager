import React from 'react';
import { AppHeader } from '.';

const Template = (args) => <AppHeader {...args} />;

export default {
  title: 'AppHeader',
  component: AppHeader,
};

export const Default = Template.bind({});
Default.args = {
  title: 'dtiManager',
  url: '/',
};
