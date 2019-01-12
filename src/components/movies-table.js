import React, {Component} from 'react';
import '../scss/components/expenses-list.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '../scss/components/movies-table.scss';

class MoviesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.movies,
      isfav: this.props.isfav,
      favorites: this.props.favorites,
    }
    this.handleTableCell = this.handleTableCell.bind(this);
    this.handleToggleHighlight = this.handleToggleHighlight.bind(this);
  }

  handleToggleHighlight(whichKey) {
    console.log(whichKey);
    let addFav = this.state.movies[whichKey];
    console.log(addFav);
		if (
			localStorage.getItem(whichKey) !== undefined &&
			document.getElementById('movies-table').children !== undefined) {
			let highItm = document.getElementById('movies-table').children[1].children[whichKey];
        //toggle highlight class
        if (highItm.classList.contains('highlight')) {
          highItm.classList.remove('highlight');
          localStorage.removeItem(String(whichKey)); //rem from store
          this.setState(
            {
              //cannot remove by key/maybe id.
              favorites: this.props.favorites.forEach((itm,index) => {
                if(itm.id === addFav.id) {
                  this.props.favorites.splice(index,1);
                }
                return this.props.favorites;
              })
            }
          );
        } else {
          highItm.classList.add('highlight');
          this.props.addToFavorites(addFav);
        }
		} //if
	}

  handleTableCell(e) {
		//get table cell
		e.preventDefault();
		let favKey = e.currentTarget.getAttribute('favKey');
		localStorage.setItem(
			String(favKey),
			JSON.stringify(
				this.state.movies.filter((itm, index) => {
					//on table cell click
					return index == favKey ? itm : null; //add to store
				})[0]
			)
    );
    this.handleToggleHighlight(favKey);
	}

  render() {
    return (
      <Paper className="paper-root">
        <Table id="movies-table" className="movies-table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Id</TableCell>
              <TableCell align="left">Lang</TableCell>
              <TableCell align="left">Overview</TableCell>
              <TableCell align="left">Popularity</TableCell>
              <TableCell align="left">Release date</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Vote Avg</TableCell>
              <TableCell align="left">Vote</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.movies.length > 0 ? (
              this.props.movies.map((mov, idx) => {
                return [
                  <TableRow key={idx} favkey={idx}
                    onClick={this.handleTableCell}
                  >
                    <TableCell  className="table-id" align="left">
                      {mov.id}
                    </TableCell>
                    <TableCell className="table-language" align="left">
                      {mov.original_language}
                    </TableCell>
                    <TableCell className="table-overview" align="left">
                      {mov.overview}
                    </TableCell>
                    <TableCell className="table-popularity" align="left">
                      {mov.popularity}
                    </TableCell>
                    <TableCell className="table-release-date" align="left">
                      {mov.release_date}
                    </TableCell>
                    <TableCell className="table-title" align="left">
                      {mov.title}
                    </TableCell>
                    <TableCell className="table-vote-average" align="left">
                      {mov.vote_average}
                    </TableCell>
                    <TableCell className="table-vote-count" align="left">
                      {mov.vote_count}
                    </TableCell>
                  </TableRow>
                ];
              })
            ) : null}
          </TableBody>
        </Table>
      </Paper>
    );
  }
};

export default MoviesTable;
