import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import TopBar from '../../../components/header/top-bar';


describe('TopBar component', () => {
  it('should render top navigation correctly', () => {
    const wrapper = shallow(<TopBar />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should have four page-links, each with its own class', () => {
    const wrapper = shallow(<TopBar />);
    expect(wrapper.find('.nav.topbar-home').length).toBe(1);
    expect(wrapper.find('.nav.topbar-expenses').length).toBe(1);
    expect(wrapper.find('.nav.topbar-movies').length).toBe(1);
    expect(wrapper.find('.nav.topbar-earthquakes').length).toBe(1);
  });

});

