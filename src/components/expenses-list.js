import React from 'react';
import {connect} from 'react-redux';
import '../scss/components/expenses-list.scss';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const ExpensesList = (props) => (

      <Paper>
        <Table id='expenses-table' className='expenses-table'>
          <TableHead>
            <TableRow>
              <TableCell align="left">Id</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="left">Notes</TableCell>
              <TableCell align="left">Amount</TableCell>
              <TableCell align="left">createdAt</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {
                props.expenses.map((itm,index) => {
                  return [
                <TableRow key={index} expkey={index}>
                  <TableCell align="left">{itm.id}
                  </TableCell>
                  <TableCell align="left">{itm.description}
                  </TableCell>
                  <TableCell align="left">{itm.note}
                  </TableCell>
                  <TableCell align="left">£{itm.amount}
                  </TableCell>
                  <TableCell align="right">{itm.createdAt}
                  </TableCell>
                </TableRow>
                  ];
                })
              }
          </TableBody>
        </Table>
      </Paper>

);


/**
 *  // expenses that match text='bill' in description (2 out of  8)
 *  // bill is atm set within my actions inside index.js
 */
const mapStateToProps = (state) => {
  return {
      //displaying all expenses
      expenses: state.expenses,
      filter: state.filters,
      //expenses: getVisibleExpenses(state.expenses, state.filters)
  };
}



export default connect(mapStateToProps)(ExpensesList);






