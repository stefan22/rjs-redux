import React, { Component } from 'react';
import Header from '../../components/header';
import MoviesTable from '../../components/movies-table';
import FavoriteStorageButton from '../../components/favorite-storage-button';
import '../../scss/App.scss';
import '../../scss/components/movies-table.scss';
import MovieSearch from '../../components/movie-search';

const API = 'https://api.themoviedb.org/3/search/movie?api_key=117e9acacc471dabf30286fd171fe77d&query=';

class MoviesPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
      pageName: 'Movies page',
			movies: [],
      moviesLoaded: false,
      movieQuery: 'star',
    };
    this.handleGetMovies = this.handleGetMovies.bind(this);
    this.handleMovieInput = this.handleMovieInput.bind(this);
    this.handleFavoriteStorage = this.handleFavoriteStorage.bind(this);
    this.handleTableCell = this.handleTableCell.bind(this);
  }

  componentWillMount() {  //bef init render get storage
    localStorage.getItem('localMovies') && this.setState({
      moviesLoaded: false,
      movies: JSON.parse(localStorage.getItem('localMovies')),
    });
  }

  componentDidMount() {  //after init
    this.setState(prevState => ({//reset state
      moviesLoaded: !prevState.moviesLoaded
    }));

  }

  handleMovieInput(term) {
    const movies = this.state.movies || [];
    let storeTitles = [];
    let isTerm = new RegExp(term + '.*','i');
    //set movieQuery
    this.setState({
      movieQuery: (this.state.movieQuery !== isTerm) ? isTerm : this.state.movieQuery
    });

    //check stored movies for matches
    if(movies.length > 0) {
      movies.map((itm) => {
        if((itm.title).match(isTerm)) {
          storeTitles.push(itm);
        }
        return this.setState({
          movies: storeTitles, ...movies
        });
      });
    }

    else {//search api
      this.handleGetMovies();
    }

  }


  handleFavoriteStorage() {
    console.log('handle favorite in app');

  }


  handleGetMovies() {//not in storage search api
      fetch(API + this.state.movieQuery)
      .then((response) => response.json())
      .then((data) => {
        data = data.results;
        this.setState(prevState => ({//add results to front of array
          moviesLoaded: true,
          movies: data, ...prevState.movies
        }));
      });


  }


  componentDidUpdate(nextProps,nextState) {  //bef rend new props
    nextState = this.state;
    localStorage.setItem('localMovies', JSON.stringify(nextState.movies));

  }

  handleTableCell(e) {//get table cell
    e.preventDefault();
    let favKey = e.currentTarget.getAttribute('favKey');
    localStorage.setItem(String(favKey), JSON.stringify(
      this.state.movies.filter((itm,index) => {  //on table cell click
        return (index == favKey) ? itm : null;   //save item to local storage
      })[0]
    ));
  }


	render() {
    let saveList='Show Favorites';
    const {moviesLoaded} = this.state;
    const {pageName} = this.state;
		if (!moviesLoaded) {
			return (
				<div className="container">
					<Header pageName={pageName} />
					<div className="main-content">
            <div className='movies-loading'>
              <h1>Loading...</h1>
            </div>
            <div className="movies-loader">
              <div className='movie-icon'>
              </div>
						</div>
					</div>
				</div>
			);
		} else {

      //movies have loaded
			return (
				<div className="container">
					<Header pageName={pageName} />
					<div className="main-content">
						<div className="movies-list">
							<h1>Movies list</h1>
              <div className='movie-input'>
                  <MovieSearch handleMovieInput={this.handleMovieInput} />
              </div>

              <div className='save-list'>
                <FavoriteStorageButton
                  handleFavoriteStorage={this.handleFavoriteStorage}
                  name={saveList}
                  movies={this.state.movies}


                />

              </div>

              <MoviesTable
                handleTableCell={this.handleTableCell}
                moviesLoaded={this.state.moviesLoaded}
                movies={this.state.movies} />

						</div>

					</div>
				</div>
			);
		}
	}
}

export default MoviesPage;
