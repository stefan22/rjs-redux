import React, {Component} from 'react';
import ExpensesList from '../../components/expenses/expenses-list';
import '../../scss/App.scss';
import ExpensesListFilters from '../../components/expenses/expenses-list-filters';


class ExpensesListPage extends Component {
  render() {
    return (
      <div className='wrapper'>
        <div className='container'>
        <header className='header expenses-list'>
          <h1 className='text-center'>Expenses List page</h1>
          <p className='text-center'>(filters off description)</p>
        </header>
          <div className="main-content">
            <ExpensesListFilters />
            <ExpensesList />
          </div>


      </div>
      </div>
    );
  }
}


export default ExpensesListPage;
