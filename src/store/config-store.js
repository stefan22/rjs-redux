import {createStore, combineReducers} from 'redux';
import ExpensesReducer from '../reducers/expenses-reducer';
import FiltersReducer from '../reducers/filters-reducer';

// store
export default () => {
  const store = createStore(combineReducers({
    expenses: ExpensesReducer,
    filters: FiltersReducer
  }));

  return store;
};


