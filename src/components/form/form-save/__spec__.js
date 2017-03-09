import React from 'react';
import { shallow } from 'enzyme';
import FormSave from './form-save';

describe('<FormSave />', () => {
  let key = 'carbon-form-save',
      wrapper;

  beforeEach(() => wrapper = shallow(<FormSave><div className='test' /></FormSave>));

  it("renders it's children", () => {
    expect(wrapper.find('.test').length).toEqual(1);
  });
});
