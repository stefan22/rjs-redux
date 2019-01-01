import React, {Component} from 'react';
import Header from '../../components/header';
import '../../scss/App.scss';


class AddExpensePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageName: 'Add Expense page'
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


export default AddExpensePage;
