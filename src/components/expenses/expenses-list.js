import React from 'react';
import {connect} from 'react-redux';
import ExpensesListItem from './expenses-list-item';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '../../scss/components/expenses-list.scss';
import selectExpenses from '../../selectors/get-visible-expenses';


const ExpensesList = (props) => {
  return (
     <Paper className='paper-root'>
      <Table id='expenses-table' className='expenses-table'>
        <TableHead>
          <TableRow >
            <TableCell align="left">id</TableCell>
            <TableCell align="left">description</TableCell>
            <TableCell align="left">notes</TableCell>
            <TableCell align="left">amount</TableCell>
            <TableCell align="left">createdAt</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            props.expenses.map((expenseObj,index) => {
              return <ExpensesListItem key={index} {...expenseObj} />
            })
          }
      </TableBody>
      </Table>
    </Paper>
  );
};


const mapStateToProps = (state) => {
  return { //displaying all expenses
      expenses: selectExpenses(state.expenses, state.filters)
  };
}


export default connect(mapStateToProps)(ExpensesList);






