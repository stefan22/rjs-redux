import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import '../scss/components/expenses-list.scss';
import {setTextFilter} from '../actions/filters';
import {connect} from 'react-redux';


const SearchInput = (props) => {
  return (
    <Paper className='search-root' elevation={1}>
      <IconButton className='search-icon' aria-label="Menu">
       <Icon className='search-menu-icon'>menu</Icon>
      </IconButton>
      <InputBase
        className='search-input'
        placeholder="Enter search term"
        value={props.filters.text}
        onChange={
          (e) => {
            props.dispatch(setTextFilter({
              text: e.target.value
            }));
            //console.log(e.target.value);
            //console.log(props);
          }}/>

      <IconButton className='search-icon' aria-label="Search">
      <Icon>search</Icon>
      </IconButton>
    </Paper>
  );


};



const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  }
};


export default connect(mapStateToProps)(SearchInput);



