import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import '../../scss/components/expenses-list.scss';
import '../../scss/components/movies-table.scss'

class MovieSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieQuery: this.props.movieQuery,
    };
    this.handleMovieInput = this.handleMovieInput.bind(this);
    this.enterKey = this.enterKey.bind(this);
  }

  enterKey(e) {
    if(e.keyCode === 13) {
      document.querySelector('.search-input input').value = '';
      let xlight = document.getElementById('movies-table');
      let highs = xlight.children[1].children;
      //remove highlights
      for(let i=0; i<highs.length; i++) {
        if(highs[i].classList.contains('highlight')) {
          highs[i].classList.remove('highlight');
        }
      }
    }
  }

  handleMovieInput(e) {
    let query = e.target.value.trim();
    let space = '<span className="hide"> </span>';
    if(typeof query === 'string') {
      query = query.split(' ').join('&');
      this.setState({
        movieQuery: (this.state.movieQuery === query) ? '' : this.state.movieQuery + space,
      });
      this.props.handleMovieInput(query);
    }

    document.querySelector('.search-input input')
    .addEventListener('keydown',this.enterKey, false);
  }
  render() {
    return (
      <Paper className='search-root' elevation={1}>
        <IconButton className='search-icon' aria-label="Menu">
        <Icon className='search-menu-icon'>menu</Icon>
        </IconButton>
        <InputBase
          className='search-input'
          placeholder="Enter movie name"
          onChange={this.handleMovieInput}
        />

        <IconButton className='search-icon' aria-label="Search">
        <Icon>search</Icon>
        </IconButton>
      </Paper>
    );

  }

};


export default MovieSearch;



