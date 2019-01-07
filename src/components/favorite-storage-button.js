import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import '../scss/App.scss';
import '../scss/components/expenses-list.scss';
import '../scss/components/movies-table.scss';
import LoadFavorites from './modal';


class FavoriteStorageButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.movies,
      openModal: false,
    }
    this.handleFavoriteStorage = this.handleFavoriteStorage.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);

  }

  handleFavoriteStorage(e) {
    this.props.handleFavoriteStorage();
    let modal = document.querySelector('.isModal.hide');
    modal.className = 'isModal show';
  }

  handleCloseModal() {
    document.querySelector('isModal hide');
  }



  render() {
    return (
      <div className='button-wrap'>
          <Button
            onClick={this.handleFavoriteStorage}
            color="primary">
            {this.props.name}
          </Button>
          <LoadFavorites
            openModal={this.state.openModal}
            handleFavoriteStorage={this.handleFavoriteStorage}
            handleCloseModal={this.handleCloseModal}
            />
      </div>
    );
  }
}






export default FavoriteStorageButton;
