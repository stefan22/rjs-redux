import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Routes from './router/router';
import ConfigStore from './store/config-store';
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import getExpenses from './selectors/get-visible-expenses';
import './index.scss';
import * as serviceWorker from './serviceWorker';

const store = ConfigStore();

// subscribe
const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getExpenses(state.expenses,state.filters);
  //console.log(visibleExpenses);
});

 // actions
const exp1 = store.dispatch(addExpense({
  description: 'June rent',
  note: 'rent paid in full',
  amount: 150000,
  createdAt: 1002,
}));

const exp2 = store.dispatch(addExpense({
  description: 'Water bill June',
  note: 'paid bill in full',
  amount: 17000,
  createdAt: 1003,
}));

const exp3 = store.dispatch(addExpense({
  description: 'July rent',
  note: 'rent paid in full - check# 123',
  amount: 150000,
  createdAt: 1002,
}));

const exp4 = store.dispatch(addExpense({
  description: 'August rent',
  note: 'rent paid in full - check# 129',
  amount: 2100000,
  createdAt: 1004,
}));

const exp5 = store.dispatch(addExpense({
  description: 'Water bill July',
  note: 'paid bill in full',
  amount: 17700,
  createdAt: 1005,
}));

const exp6 = store.dispatch(addExpense({
  description: 'September rent',
  note: 'advance-discount - check# 223',
  amount: 1800000,
  createdAt: 1007,
}));

const exp7 = store.dispatch(addExpense({
  description: 'Electricity July',
  note: 'paid half bill only',
  amount: 90000,
  createdAt: 1009,
}));

const exp8 = store.dispatch(addExpense({
  description: 'Electricity July',
  note: 'paid remainer part of bill',
  amount: 90005,
  createdAt: 1011,
}));


// unsubscribe
unsubscribe();


const jsx = (
  <Provider store={store}>
    <Routes />
  </Provider>
);



ReactDOM.render(
  jsx,
  document.getElementById('root')
);








serviceWorker.unregister();
