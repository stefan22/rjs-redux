import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from './components/header';
import BlueButton from './components/button';
import './scss/App.scss';
import './scss/home.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageName: 'Home page'
    }
  }
  render() {
    let btnName = 'Page Not Found';
    return (
      <div className="container">
          <Header pageName={this.state.pageName} />

            <Link to='/lost'>
                <BlueButton name={btnName} />
            </Link>
            <p>Click button for 404 page</p>
            <div className='store-data'>
              <h2>created expenses list page</h2>

              top menu..

            </div>
      </div>
    );
  }
}




export default App;









