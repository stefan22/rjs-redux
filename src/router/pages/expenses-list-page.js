import React, {Component} from 'react';
import ExpensesList from '../../components/expenses-list';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import '../../scss/App.scss';


class ExpensesListPage extends Component {
  render() {
    return (
      <div>
        <div className="app-comp full-container no-padding">
          <ExpensesList  />

        </div>



      </div>
    )
  }
}


export default ExpensesListPage;
