import React, {Component} from 'react';
import '../scss/components/modal.scss';

class LoadFavorites extends Component {
  constructor(props) {
    super(props);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleCloseModal() {
    let closeModal = document.querySelector('.isModal.show');
    closeModal.className = 'isModal hide';
  }

  render() {
    return (
      <div>
        <div className='isModal hide'>
          <h3 className='text-center'>Your favorites:</h3>

          <button
            onClick={this.handleCloseModal}
            className='close-modal'>close
          </button>
          <p className='text-center'>Press the close button to continue.</p>
        </div>
      </div>
    );
  }


}





export default LoadFavorites;
