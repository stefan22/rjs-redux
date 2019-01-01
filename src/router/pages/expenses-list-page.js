import React, {Component} from 'react';
import ExpensesList from '../../components/expenses-list';
import '../../scss/App.scss';


class ExpensesListPage extends Component {
  render() {
    return (
      <div className='container no-padding'>
        <header className='header expenses-list'>
        <h1 className='text-center'>Expenses List page</h1>

          <div className="app-comp full-container">
            <ExpensesList />
          </div>

        </header>
      </div>

    );
  }
}


export default ExpensesListPage;
