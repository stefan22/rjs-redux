import React from 'react';
import '../scss/components/expenses-list.scss';
import {connect} from 'react-redux';
import SearchBar from './search-input';


const ExpensesFilters = (props) => (
  <div className='input-filters'>
    <div className='filters-container'>
      <SearchBar />
    </div>
  </div>

);


const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  }
};


export default connect(mapStateToProps)(ExpensesFilters);
