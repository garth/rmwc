import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
// import { Welcome } from '@storybook/react/demo';
import { boolean } from '@storybook/addon-knobs';
import { Button } from './';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Buttons', module).add('Button', () => (
  <Button
    unelevated={boolean('unelevated', false)}
    stroked={boolean('stroked', false)}
    dense={boolean('dense', false)}
    raised={boolean('raised', false)}
    compact={boolean('compact', false)}
    ripple={boolean('ripple', true)}
    onClick={action('clicked')}
  >
    Button
  </Button>
));
