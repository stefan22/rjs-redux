import React, {Component} from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import '../../scss/components/expenses-list.scss';
import Checkbox from '@material-ui/core/Checkbox';
import {connect} from 'react-redux';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import {removeExpense} from '../../actions/expenses';


class ExpensesListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {id} = this.props;
    return (
          <TableRow>
            <TableCell id='expense-id' padding="checkbox" align="left">
               <Fab className='delete-expense'  onClick={() => {
                    this.props.dispatch(removeExpense({
                      id:id,
                    }));
                  }}>
                  <DeleteIcon />
               </Fab>
              {this.props.id}
            </TableCell>
            <TableCell align="left">{this.props.description}
            </TableCell>
            <TableCell align="left">{this.props.note}
            </TableCell>
            <TableCell align="left">£{this.props.amount}
            </TableCell>
            <TableCell align="right">{this.props.createdAt}
            </TableCell>
          </TableRow>
    );
  }
}


export default connect()(ExpensesListItem);
