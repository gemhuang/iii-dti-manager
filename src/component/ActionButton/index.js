import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'carbon-components-react';

export const ACTION_TYPE = {
  SUBMIT: 1,
  CANCEL: 2,
};

function switchKind(actionType) {
  switch (actionType) {
    case ACTION_TYPE.SUBMIT:
      return 'primary';
    case ACTION_TYPE.CANCEL:
      return 'tertiary';
    default:
      return 'tertiary';
  }
}

export const ActionButton = ({ label, disabled, actionType, onClick }) => {
  return (
    <Button
      kind={switchKind(actionType)}
      onClick={onClick}
      disabled={disabled}>
      {label}
    </Button>
  );
};

ActionButton.propTypes = {
  disabled: PropTypes.bool,
  actionType: PropTypes.number,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

ActionButton.defaultProps = {
  disabled: false,
  actionType: ACTION_TYPE.CANCEL,
  onClick: undefined
};
