import React, { Component } from 'react';
import Header from '../../components/header';
import MoviesTable from '../../components/movies-table';
import FavoriteStorageButton from '../../components/favorite-storage-button';
import '../../scss/App.scss';
import '../../scss/components/movies-table.scss';
import MovieSearch from '../../components/movie-search';
import TableInfo from '../../components/table-info';

const API = 'https://api.themoviedb.org/3/search/movie?api_key=117e9acacc471dabf30286fd171fe77d&query=';

class MoviesPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
      isFav: false,
			favorites: [],
			pageName: 'Movies page',
			movies: [],
			moviesLoaded: false,
			movieQuery: 'star'
		};
		this.handleGetMovies = this.handleGetMovies.bind(this);
		this.handleMovieInput = this.handleMovieInput.bind(this);
		this.handleShowFavoritesButton = this.handleShowFavoritesButton.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
	}

	componentWillMount() {	//bef init render get storage
		localStorage.getItem('localMovies') &&
			this.setState({
				moviesLoaded: false,
				movies: JSON.parse(localStorage.getItem('localMovies'))
			});
	}

	componentDidMount() {//after init
		this.setState((prevState) => ({
			moviesLoaded: !prevState.moviesLoaded 	//reset state
		}));
	}

	handleMovieInput(term) {
		const movies = this.state.movies || [];
		let storeTitles = [];
		let isTerm = new RegExp(term + '.*', 'i');
		//set movieQuery
		this.setState({
			movieQuery: this.state.movieQuery !== isTerm ? isTerm : this.state.movieQuery
		});
		//check stored movies for matches
		if (movies.length > 0) {
			movies.map((itm) => {
				if (itm.title.match(isTerm)) {
					storeTitles.push(itm);
				}
				return this.setState({
					movies: storeTitles,
					...movies
				});
			});
		} else {
			//search api
			this.handleGetMovies();
		}
	}

	handleShowFavoritesButton() {
		console.log('handle favorite in app');
   this.setState(prevState => ({
     isFav: !prevState.isFav
   }));
	}

	handleGetMovies() {
		//not in storage search api
		fetch(API + this.state.movieQuery).then((response) => response.json()).then((data) => {
			data = data.results;
			this.setState((prevState) => ({
				//add results to front of array
				moviesLoaded: true,
				movies: data,
				...prevState.movies
			}));
		});
	}

	componentDidUpdate(nextProps, nextState) {
		//bef rend new props
		nextState = this.state;
		localStorage.setItem('localMovies', JSON.stringify(nextState.movies));
	}

  addToFavorites(addFav){
    this.setState({
      favorites: this.state.favorites.concat(addFav)
    });
  }

	render() {
    console.log(this);
		let saveList = 'Show Favorites';
		const { moviesLoaded } = this.state;
		const { pageName } = this.state;
		if (!moviesLoaded) {
			return (
				<div className="container">
					<Header pageName={pageName} />
					<div className="main-content">
						<div className="movies-loading">
							<h1>Loading...</h1>
						</div>
						<div className="movies-loader">
							<div className="movie-icon" />
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
							<div className="movie-input">
								<MovieSearch handleMovieInput={this.handleMovieInput} />
								<TableInfo />
							</div>

							<div className="save-list">
								<FavoriteStorageButton
									handleShowFavoritesButton={this.handleShowFavoritesButton}
									name={saveList}
									movies={this.state.movies}
                  favorites={this.state.favorites}
                  isFav={this.state.isFav}
								/>
							</div>

							<MoviesTable
								moviesLoaded={this.state.moviesLoaded}
                favorites={this.state.favorites}
								movies={this.state.movies}
                isFav={this.state.isFav}
                addToFavorites={this.addToFavorites}
							/>

						</div>
					</div>
				</div>
			);
		}
	}
}

export default MoviesPage;
