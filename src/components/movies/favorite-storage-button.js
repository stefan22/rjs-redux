import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import '../../scss/App.scss';
import '../../scss/components/expenses-list.scss';
import '../../scss/components/movies-table.scss';
import LoadFavorites from './load-favorites';

class FavoriteStorageButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.movies,
      favorites: this.props.favorites,
      isFav:this.props.isFav,
    }
    this.handleShowFavoritesButton = this.handleShowFavoritesButton.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleShowFavoritesButton(e) {
    e.preventDefault();
    let openModal = document.querySelector('.isModal');
    if(openModal.classList.contains('hide')) {
      this.props.handleShowFavoritesButton();
      openModal.className = 'isModal show';
      document.body.classList.add('modal-bg');
    }
  }

  handleCloseModal(e) {
    e.preventDefault();
    let closedModal = document.querySelector('.isModal');
    if(closedModal.classList.contains('show')) {
      this.props.handleShowFavoritesButton();
      closedModal.className = 'isModal hide';
      document.body.classList.remove('modal-bg');
    }
  }

  render() {
    return (
      <div>
        <div className='button-wrap'>
            <Button
              onClick={this.handleShowFavoritesButton}
              color="primary">
              {this.props.name}
            </Button>

            <div className='isModal hide'>
              <div className='header'>
                  <h3 className='text-center'>Your favorites:</h3>
                  <button
                  onClick={this.handleCloseModal}
                  className='close-modal'>close
                </button>
              </div>
                <LoadFavorites
                  favorites={this.props.favorites}
                  isFav={this.props.isFav}
                  handleUnfavorite={this.props.handleUnfavorite}
                />
              <p className='text-center'>Press the close button to continue.</p>
            </div>

        </div>

      </div>
    );
  }
}




export default FavoriteStorageButton;
