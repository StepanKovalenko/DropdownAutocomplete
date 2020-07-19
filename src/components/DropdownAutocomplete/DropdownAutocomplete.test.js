import React from 'react';
import { shallow } from 'enzyme';
import DropdownAutocomplete from './DropdownAutocomplete';
import * as mockData from '../../mockData.json';

describe('<DropdownAutocomplete />', () => {
  let wrapper;

  const props = {
    options: mockData.options
  };

  beforeEach(() => {
    wrapper = shallow(<DropdownAutocomplete {...props} getValue={() => {}} />);
  });

  it('It should mount', () => {
    expect(wrapper.length).toBe(1);
  });

  it('List of items should be shown', () => {
    wrapper.find('.input').simulate('click');
    expect(wrapper.find('ul.options').length).toEqual(1);
  });

  it('Found value should be equal to the entered value', () => {
    wrapper.find('.input')
      .simulate('click')
      .simulate('change', {target: {value: 10}});

    wrapper.find('ul.options li.option:first-child').simulate('click');
    expect(wrapper.find('input').prop('value')).toEqual('test value 10');
  });

  it('List of items should be equal length with the length of the mock data', () => {
    wrapper.find('.input').simulate('click');
    expect(wrapper.find('ul.options li.option').length).toBe(mockData.options.length)
  });

  it('Entered value should be cleared', () => {
    wrapper.find('.input')
      .simulate('click')
      .simulate('change', {target: {value: 10}});

    wrapper.find('.clear-btn').simulate('click');
    expect(wrapper.find('input').prop('value')).toEqual('');
  });
});
