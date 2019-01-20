import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import Header from '../../../components/header/header';


describe('Header component', () => {
  it('should render header component correctly', () => {
    const wrapper = shallow(<Header />);
    expect(toJSON(wrapper)).toMatchSnapshot();
    expect(wrapper.find('.header').length).toBe(1);
  });

  it('should have a class name of `header`', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.header').length).toBe(1);
  });

});

