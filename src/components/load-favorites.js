import React, {Component} from 'react';
import '../scss/components/modal.scss';


class LoadFavorites extends Component {
  render() {
    return (
          <div className='favorites-list'>
              {

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
    );
  }

}





export default LoadFavorites;
