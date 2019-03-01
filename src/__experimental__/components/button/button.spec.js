import React from 'react';
import { shallow } from 'enzyme';
import Button from '.';

describe('Button', () => {
  const renderShallow = props => shallow(<Button { ...props } />);

  it('renders with an input', () => {
    expect(renderShallow({ children: 'click' })).toMatchSnapshot();
  });
});
