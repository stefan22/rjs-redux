import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import '../../scss/App.scss';
import lost from '../../images/lost.jpg';


class NotFoundPage extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <div className='lost-header'>
            <h1>Is someone maybe lost?</h1>
            <h2>Luckily, we're here to help!</h2>
          </div>
          <div className='lost-error'>
            <Button component={Link} to='/'
              className='back-home'
              color="primary">
              <img src={lost} className='lost-image'
              alt='page not found' width='600' height='430' />
            </Button>
          </div>

          <p className='lost404 text-center'>Click anywhere on image to return to Home page</p>
        </div>
      </div>
    )
  }
}


export default NotFoundPage;
