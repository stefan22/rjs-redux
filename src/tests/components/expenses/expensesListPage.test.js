import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpensesListPage from '../../../router/pages/expenses-list-page';

describe('Expenses-list page', () => {
  it('should render expenses-list page correctly', () => {
    const wrapper = shallow(<ExpensesListPage />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should contain `h1` of `Expenses List page`', () => {
    const wrapper = shallow(<ExpensesListPage />);
    expect(wrapper.find('h1').text()).toBe('Expenses List page');
  });

});
