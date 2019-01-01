import React, {Component} from 'react';
import Header from '../../components/header';
import '../../scss/App.scss';

class HelpExpensePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageName: 'Help page'
    }
  }
  render() {

    return (
      <div>
        <div className="container">
          <Header pageName={this.state.pageName} />

        </div>
      </div>
    )
  }
}


export default HelpExpensePage;
