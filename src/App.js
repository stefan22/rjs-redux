import React, { Component } from 'react';
import Header from './components/header';
import BlueButton from './components/button';
import './scss/App.scss';

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
          <BlueButton name={btnName} />
          <p>Click button for 404 page</p>

          <div className='main-content'>
            <h2>Main content</h2>
            <p className='text-left'>
            Dolor primis viverra aenean fusce inceptos bibendum sagittis pretium aptent inceptos nulla facilisi. Laoreet molestie est faucibus dapibus in sed aptent quisque nulla. Lacinia, taciti vitae orci ante tincidunt in. Erat ac; convallis dignissim? Sollicitudin senectus, interdum imperdiet. Tortor urna gravida nisi libero neque tristique mauris inceptos amet ligula. Vulputate sociis eget at etiam inceptos quisque eleifend.
            </p>
          </div>
      </div>
    );
  }
}




export default App;









