import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
// import { Welcome } from '@storybook/react/demo';
import { boolean } from '@storybook/addon-knobs';
import { Menu, MenuItem, MenuAnchor } from './';
import { Button } from '../Button';
import { storyWithState } from '../Base/story-with-state';

const MenuStory = storyWithState(
  state => ({
    open: boolean('open', state.open || false)
  }),
  function() {
    return (
      <MenuAnchor>
        <Button raised onClick={evt => this.setState({ open: !this.state.open })}>
          Open Menu
        </Button>

        <Menu open={this.state.open} onClose={evt => this.setState({ open: false })}>
          <MenuItem>Cookies</MenuItem>
          <MenuItem>Pizza</MenuItem>
          <MenuItem>Icecream</MenuItem>
        </Menu>
      </MenuAnchor>
    );
  }
);

storiesOf('Menus', module).add('Menu', () => <MenuStory />);
