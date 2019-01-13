import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import '../../scss/components/expenses-list.scss';

const ExpensesListItem = ({id,description,note,amount,createdAt}) => {
  return (
        <TableRow>
          <TableCell align="left">{id}
          </TableCell>
          <TableCell align="left">{description}
          </TableCell>
          <TableCell align="left">{note}
          </TableCell>
          <TableCell align="left">£{amount}
          </TableCell>
          <TableCell align="right">{createdAt}
          </TableCell>
        </TableRow>
  );
}


export default ExpensesListItem;
