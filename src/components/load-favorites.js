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
    console.log(this);
    return (
        <div className='isModal hide'>
          <div className='header'>
              <h3 className='text-center'>Your favorites:</h3>
              <button
              onClick={this.handleCloseModal}
              className='close-modal'>close
            </button>
          </div>

          <div className='favorites-list'>

              {(this.props.isFav) &&
                this.props.favorites.map((itm,index) => {
                  return (
                    <ul key={index}>
                      <li>{itm.id}</li>
                      <li>{itm.title}</li>
                      <li>{itm.overview}</li>
                      <li>{itm.release_date}</li>
                    </ul>
                  );
                })
              }

          </div>
          <p className='text-center'>Press the close button to continue.</p>
        </div>
    );
  }


}





export default LoadFavorites;
