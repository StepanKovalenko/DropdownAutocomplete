import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('It should mount', () => {
    expect(wrapper.length).toBe(1);
  });
});
