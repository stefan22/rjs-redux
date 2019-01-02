import React, {Component} from 'react';
import ExpensesList from '../../components/expenses-list';
import '../../scss/App.scss';
import ExpensesFilters from '../../components/expenses-filters';


class ExpensesListPage extends Component {
  render() {
    return (
      <div className='container no-padding'>
        <header className='header expenses-list'>
        <h1 className='text-center'>Expenses List page</h1>

          <div className="app-comp full-container">
            <ExpensesFilters />
            <ExpensesList />
          </div>

        </header>
      </div>

    );
  }
}


export default ExpensesListPage;
