import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { Fab } from './';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Buttons', module).add('Fab', () => (
  <Fab mini={boolean('mini', false)} ripple={boolean('ripple', true)} onClick={action('clicked')}>
    favorite
  </Fab>
));
