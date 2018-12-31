import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import '../../scss/App.scss';

class EditExpensePage extends Component {
  render() {
    return (
      <div>
        <div className="app-comp full-container no-padding">

        </div>
        Edit
        <Button
            className='back-home'
            color="primary"><Link to='/'>Back Home</Link>
        </Button>
      </div>
    )
  }
}


export default EditExpensePage;
