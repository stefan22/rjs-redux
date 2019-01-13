import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from '../App';
import AddExpensePage from './pages/add-expense-page';
import ExpensesListPage from './pages/expenses-list-page';
import MoviesPage from './pages/movies-page';
import DeleteExpensePage from './pages/delete-expense-page';
import EditExpensePage from './pages/edit-expense-page';
import HelpExpensePage from './pages/help-expense-page';
import UpdateExpensePage from './pages/update-expense-page';
import NotFoundPage from './pages/not-found-page';
import TopBar from '../components/header/top-bar';



const Routes = () => (

  <BrowserRouter>
    <div>
      <TopBar />
      <Switch>
        <Route path='/' component={App} exact={true} />
        <Route path='/expenses' component={ExpensesListPage} />
        <Route path='/movies' component={MoviesPage} />
        <Route path='/add' component={AddExpensePage} />
        <Route path='/edit/:id' component={EditExpensePage} />
        <Route path='/delete/:id' component={DeleteExpensePage} />
        <Route path='/update/:id' component={UpdateExpensePage} />
        <Route path='/help' component={HelpExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>


);


export default Routes;
