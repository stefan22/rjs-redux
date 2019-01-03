import React, {Component} from 'react';
import ExpensesList from '../../components/expenses-list';
import '../../scss/App.scss';
import ExpensesFilters from '../../components/expenses-filters';


class ExpensesListPage extends Component {
  render() {
    return (
      <div className='container'>
        <header className='header expenses-list'>
          <h1 className='text-center'>Expenses List page</h1>
          <p className='text-center'>(filters off description)</p>
        </header>
          <div className="main-content">
            <ExpensesFilters />
            <ExpensesList />
          </div>


      </div>

    );
  }
}


export default ExpensesListPage;
