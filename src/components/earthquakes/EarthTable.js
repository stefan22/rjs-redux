import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '../../scss/components/earthquakes-table.scss';

class EarthTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      earthquakes: this.props.earthquakes,
      EQloaded: this.props.EQloaded,
    }
  }

  render() {
    return (
      <Paper className="paper-root">
        <Table id="eq-table" className="eq-table">
          <TableHead>
            <TableRow>
              <TableCell className="table-id"
                align="left">Ids</TableCell>
              <TableCell className="table-overview"
                align="left">Place</TableCell>
              <TableCell className="table-mag"
                align="left">Mag</TableCell>
              <TableCell className="table-magtype"
                align="left">MagType</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!!this.props.earthquakes && (
              this.props.earthquakes.map((mov, idx) => {
                return [
                  <TableRow key={idx} seckey={idx}
                  >
                    <TableCell  className="table-id" align="left">
                      {mov.properties.ids}
                    </TableCell>

                    <TableCell className="table-overview" align="left">
                      {mov.properties.place}
                    </TableCell>

                    <TableCell className="table-mag" align="left">
                      {mov.properties.mag}
                    </TableCell>

                    <TableCell className="table-magtype" align="left">
                      {mov.properties.magType}
                    </TableCell>

                  </TableRow>
                ];
              })
            ) }
          </TableBody>
        </Table>
      </Paper>
    );
  }
};


export default EarthTable;
