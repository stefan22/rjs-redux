import React from 'react';
import '../scss/components/expenses-list.scss';
import SearchInput from './search-input';


const ExpensesFilters = (props) => (
  <div className='input-filters'>
    <div className='filters-container'>
      <SearchInput />
    </div>
  </div>

);



export default ExpensesFilters;
