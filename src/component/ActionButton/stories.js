import React from 'react';
import { ActionButton, ACTION_TYPE } from '.';

const Template = (args) => <ActionButton {...args} />;

export default {
  title: 'ActionButton',
  component: ActionButton,
};

export const Submit = Template.bind({});
Submit.args = {
  label: 'Submit',
  actionType: ACTION_TYPE.SUBMIT,
  onClick: () => {
    alert('submitted!');
  }
};

export const Cancel = Template.bind({});
Cancel.args = {
  label: 'Cancel',
  actionType: ACTION_TYPE.CANCEL,
  onClick: () => {
    alert('canceled!');
  }
}