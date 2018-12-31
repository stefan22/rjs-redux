import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import '../../scss/App.scss';

class HelpExpensePage extends Component {
  render() {
    return (
      <div>
        <div className="app-comp full-container no-padding">

        </div>
        Help
        <Button
            className='back-home'
            color="primary"><Link to='/'>Back Home</Link>
        </Button>
      </div>
    )
  }
}


export default HelpExpensePage;
