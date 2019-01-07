import React from 'react';
import '../scss/components/expenses-list.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '../scss/components/movies-table.scss';

const MoviesTable = (props) => {
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
					{props.movies.length > 0 ? (
						props.movies.map((mov, idx) => {
							return [
								<TableRow key={idx} favkey={idx}
                  onClick={props.handleTableCell}
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
};

export default MoviesTable;
