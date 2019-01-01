//expensesDefault
const expensesDefault = [];

  const ExpensesReducer = (state=expensesDefault, action) => {
    switch (action.type) {
      case 'ADD_EXPENSE':
        return [
          ...state,
          action.expense
        ];
      case 'DELETE_EXPENSE':
        return state.filter((itm) => {
          if(itm.id !== action.expense.id) {
            return itm;
          }
        });
      case 'EDIT_EXPENSE':
        return state.map((itm) => {
          if(itm.id === action.expense.id) {
            return {
              ...itm,
              ...action.expense.updates
            }
          } else {
            return itm;
          }
        });
      default:
        return state;
    }
  };


export default ExpensesReducer;
