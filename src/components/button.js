import React from 'react';
import Button from '@material-ui/core/Button';
import '../scss/App.scss';

const BlueButton = (props) => {

  return (
    <div className='button-wrap'>
      <Button variant="contained" color="primary">
       {props.name}
      </Button>
    </div>
  );

};






export default BlueButton;
