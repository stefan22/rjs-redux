import React, { Component } from 'react';
import Header from '../../components/header/header';
import MoviesTable from '../../components/movies/movies-table';
import FavoriteStorageButton from '../../components/movies/favorite-storage-button';
import '../../scss/App.scss';
import '../../scss/components/movies-table.scss';
import MovieSearch from '../../components/movies/movie-search';
import TableInfo from '../../components/movies/table-info';

const API = 'https://api.themoviedb.org/3/search/movie?api_key=117e9acacc471dabf30286fd171fe77d&query=';

class MoviesPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
      isFav: false,
			favorites: [],
      movies: [],
      moviesLoaded: false,
      movieQuery: '',
		};
		this.handleGetMovies = this.handleGetMovies.bind(this);
		this.handleMovieInput = this.handleMovieInput.bind(this);
		this.handleShowFavoritesButton = this.handleShowFavoritesButton.bind(this);
    this.handleTableCell = this.handleTableCell.bind(this);
    this.favToRem = this.favToRem.bind(this);
    this.handleToggleHighlight = this.handleToggleHighlight.bind(this);
    this.handleUnfavorite = this.handleUnfavorite.bind(this);
	}

  componentWillMount() {	//bef init render get storage
    let tempFavArr = [];
    for ( let i = 0, len = localStorage.length; i < len; ++i ) {
      tempFavArr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    this.setState({
      favorites: tempFavArr,
    });
  }

	componentDidMount() {//after init
		this.setState((prevState) => ({
			moviesLoaded: !prevState.moviesLoaded 	//reset state
		}));
	}

	handleMovieInput(term) {
    this.setState({
      movieQuery: term,
    });
    this.handleGetMovies();
	}

	handleShowFavoritesButton() {
    let xlight = document.getElementById('movies-table');
    let highs = xlight.children[1].children;
    //remove highlights
    for(let i=0; i<highs.length; i++) {
      if(highs[i].classList.contains('highlight')) {
         highs[i].classList.remove('highlight');
      }
    } //isFav
    this.setState(prevState => ({
      isFav: !prevState.isFav
    }));
	}

	handleGetMovies() {
    const {movieQuery} = this.state;
    !!movieQuery &&
		fetch(API + movieQuery).then((response) => response.json()).then((data) => {
        data = data.results;
        this.setState({
          movies: data,
        });
		});
  }

  favToRem(title) {
    let isTitle = title;
    let favsRem = [];
    let {favorites} = this.state;
    favorites.filter(itm => {
      if(itm.title !== isTitle) {//rem from favs
        favsRem.push(itm);
      }
      return favsRem;
    });
    this.setState({
      favorites: favsRem,
    });
  }

  handleToggleHighlight(whichKey,title) {
    let addFavObj = this.state.movies[whichKey];
    let isTitle = title;
    let moviesTable = document.getElementById('movies-table');
		if (moviesTable.children !== undefined) {
      //toggle highlight
      let highliItem = moviesTable.children[1].children[whichKey];
      if (highliItem.classList.contains('highlight')) {
         highliItem.classList.remove('highlight');
         localStorage.removeItem(isTitle);//remove from localstorage
         this.favToRem(isTitle);
      } else {//add highlight
          highliItem.classList.add('highlight');
          //check title bef adding to localstorage
          let isInLocal = localStorage.getItem(isTitle);
          isInLocal === null && localStorage.setItem(
          String(isTitle), JSON.stringify(
            this.state.movies.filter(itm => { //chk title off movies
              return itm.title === isTitle ? itm : null; //add to store
            })[0]
          )
          );
          this.setState({//add to store
            favorites: this.state.favorites.concat(addFavObj)
          });
        }
		} //if
  }

  handleTableCell(e) {
		e.preventDefault();
    let favKey = e.currentTarget.getAttribute('favKey');
    let tartitle = e.currentTarget.children[5].textContent;
    this.handleToggleHighlight(favKey,tartitle);
  }

  handleUnfavorite(title) {
    let isTitle = title;
    localStorage.removeItem(isTitle);
    this.favToRem(isTitle);
  }


	render() {
    let saveList = 'Show Favorites';
    const pageTitle = 'Movies page';
    const pageSubtitle='Movies page list subtitle'
		const { moviesLoaded } = this.state;
		if (!moviesLoaded) {
			return (
				<div className="container">
					<Header
            pageTitle={pageTitle}
            pageSubtitle={pageSubtitle}
          />
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
        <div className='wrapper'>
				  <div className="container">
					<Header
            pageTitle={pageTitle}
            pageSubtitle={pageSubtitle}
          />
					<div className="main-content">
						<div className="movies-list">
							<h1>Movies list</h1>
							<div className="movie-input">
								<MovieSearch
                  movieQuery={this.state.movieQuery}
                  handleMovieInput={this.handleMovieInput} />
								<TableInfo />
							</div>

							<div className="save-list">
								<FavoriteStorageButton
									handleShowFavoritesButton={this.handleShowFavoritesButton}
									name={saveList}
									movies={this.state.movies}
                  favorites={this.state.favorites}
                  isFav={this.state.isFav}
                  handleUnfavorite={this.handleUnfavorite}
								/>
							</div>

							<MoviesTable
								moviesLoaded={this.state.moviesLoaded}
                favorites={this.state.favorites}
								movies={this.state.movies}
                isFav={this.state.isFav}
                addToFavorites={this.addToFavorites}
                handleTableCell={this.handleTableCell}
                handleToggleHighlight={this.handleToggleHighlight}
							/>

						</div>
					</div>
				</div>
        </div>
      );
		}
	}
}

export default MoviesPage;
