import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import '../scss/App.scss';
import '../scss/components/expenses-list.scss';
import '../scss/components/movies-table.scss';
import LoadFavorites from './load-favorites';


class FavoriteStorageButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.movies,
      favorites: this.props.favorites,
      isFav:this.props.isFav,
    }
    this.handleFavoriteStorage = this.handleFavoriteStorage.bind(this);
  }

  handleFavoriteStorage(e) {
    this.props.handleFavoriteStorage();
    let modal = document.querySelector('.isModal.hide');
    modal.className = 'isModal show';
  }


  render() {
    console.log(this);
    return (
      <div>
        <div className='button-wrap'>
            <Button
              onClick={this.handleFavoriteStorage}
              color="primary">
              {this.props.name}
            </Button>

            <LoadFavorites
              favorites={this.props.favorites}
              isFav={this.props.isFav}
          />
        </div>

      </div>
    );
  }
}




export default FavoriteStorageButton;
