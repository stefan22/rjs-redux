import React from 'react';
import '../scss/components/expenses-list.scss';
import {connect} from 'react-redux';
import {setTextFilter} from '../actions/filters';


const ExpensesFilters = (props) => (
  <div className='input-filters'>
    <div className='filters-container'>
      <input type='text' placeholder='enter search term'
       value={props.filters.text}
       onChange={
        (e) => {
          props.dispatch(setTextFilter({
            text: e.target.value
          }));
          //console.log(e.target.value);
          //console.log(props);
        }}/>
    </div>
  </div>

);


const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  }
};


export default connect(mapStateToProps)(ExpensesFilters);
