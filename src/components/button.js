import React from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import '../scss/App.scss';

const BlueButton = (props) => {

  return (
    <div className='button-wrap'>
       <Link to='/lost'>
        <Button variant="contained" color="primary">
          {props.name}
        </Button>
      </Link>
    </div>
  );

};






export default BlueButton;
