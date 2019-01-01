import uuid from 'uuid';

export const addExpense = ({description='',note='',amount=0,createdAt=0}={}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  }
});

export const removeExpense = ({id}={}) => ({
  type: 'DELETE_EXPENSE',
  expense: {
    id,
  }
});

export const editExpense = (id,updates) => ({
  type: 'EDIT_EXPENSE',
  expense: {
    id,
    updates,
  }
});
