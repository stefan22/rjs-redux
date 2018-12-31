import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import '../../scss/App.scss';


class UpdateExpensePage extends Component {
  render() {
    return (
      <div>
        <div className="app-comp full-container no-padding">

        </div>
        Update page
        <Button
            className='back-home'
            color="primary"><Link to='/'>Back Home</Link>
          </Button>
      </div>
    )
  }
}


export default UpdateExpensePage;
