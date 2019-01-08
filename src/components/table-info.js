import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../scss/components/movies-table.scss';


const TableInfo = (props) => {
  const bull = <span className='bullet'>•</span>;
  return (
    <Card className='table-info'>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Movie legend
        </Typography>
        <Typography component="ul">
          <li>{bull} Press enter to clear input field</li>
          <li>{bull} Click on table cell to store/highlight item</li>
          <li>{bull} Click on table cell again to remove stored item</li>
        </Typography>
      </CardContent>
    </Card>

  );

};



export default TableInfo;



