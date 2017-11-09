import React from 'react';
import { mount } from 'enzyme';
import { Typography } from './';

describe('IconToggle', () => {
  it('renders', () => {
    mount(<Typography use="body1" />);
  });

  it('can be adjustMargin', () => {
    const el = mount(<Typography use="body1" adjustMargin />);
    expect(!!~el.html().search('mdc-typography--adjust-margin')).toBe(true);
  });

  it('can have custom classnames', () => {
    const el = mount(<Typography use="body1" className={'my-custom-classname'} />);
    expect(!!~el.html().search('my-custom-classname')).toEqual(true);
  });
});
