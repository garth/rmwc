import React from 'react';
import PropTypes from 'prop-types';
import { simpleComponentFactory } from '../Base/simple-component-factory';
import { ListItem } from '../List';

export const PermanentDrawer = simpleComponentFactory('PermanentDrawerRoot', {
  tag: 'nav',
  classNames: 'mdc-permanent-drawer'
});

export const PermanentDrawerToolbarSpacer = simpleComponentFactory('PermanentDrawerToolbarSpacer', {
  classNames: 'mdc-permanent-drawer__toolbar-spacer'
});

export const PermanentDrawerContent = simpleComponentFactory('PermanentDrawerContent', {
  classNames: 'mdc-permanent-drawer__content'
});

export default PermanentDrawer;
