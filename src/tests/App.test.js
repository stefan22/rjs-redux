import React from 'react';
import {shallow, mount, render} from 'enzyme';
import toJSON from 'enzyme-to-json';
import App from '../App';

describe('App component', () => {
  it('should render home page component correctly', () => {
    const wrapper = shallow(<App />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should contain an h2 tag of `Main content`', () => {
    const wrapper = shallow(<App />);
    const main = <h2>Main content</h2>;
    expect(wrapper.containsMatchingElement(main)).toEqual(true);
  });


});

