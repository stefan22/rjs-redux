import React from 'react';
import '../../scss/components/earthquakes-table.scss';
import Button from '@material-ui/core/Button';


const SortByMags = (props) => (

    <div className='buttons-wrapper'>
      <Button variant="contained" color="secondary"
        className='sort-button' elevation={1}
        onClick={props.handleSortByMag}
        >
        Sort By Mag
      </Button>
    </div>

);





export default SortByMags;
