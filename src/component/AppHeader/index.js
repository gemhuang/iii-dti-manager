/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from 'carbon-components-react';

import {
  AppSwitcher20,
  Notification20,
  UserAvatar20,
} from '@carbon/icons-react';

export const AppHeader = ({ title, url }) => (
  <Header aria-label={title}>
    <SkipToContent />
    <HeaderName href="/" prefix="III">
      {title}
    </HeaderName>

    <HeaderNavigation aria-label={title}>
      <HeaderMenuItem href={url}>Link</HeaderMenuItem>
    </HeaderNavigation>

    <HeaderGlobalBar>
      <HeaderGlobalAction aria-label="Notifications">
        <Notification20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="User Avatar">
        <UserAvatar20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="App Switcher">
        <AppSwitcher20 />
      </HeaderGlobalAction>
    </HeaderGlobalBar>
  </Header>
);

AppHeader.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
};

AppHeader.defaultProps = {
  url: '/',
};
