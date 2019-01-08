import React from 'react';
import '../scss/components/movies-table.scss';


const TableInfo = (props) => (
  <div className='table-info'>
    <ul>
      <li>Press enter to clear input field</li>
      <li>Click on table cell to store/highlight item</li>
      <li>Click on table cell again to remove stored item</li>
    </ul>
  </div>

);



export default TableInfo;
