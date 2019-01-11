import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import '../scss/components/modal.scss';



class LoadFavorites extends Component {
  render() {
    return (
          <div className='favorites-list'>
              {

                this.props.favorites.map((itm,index) => {
                  return (

                    <ul key={index}>
                      <li><span className='movie-field'>
                      Id:
                      </span>
                      <Typography variant='h5'> {itm.id}</Typography>
                      </li>
                      <li>

                      <span className='movie-field'>
                      Title:
                      </span>
                      <Typography variant='h5'>
                      {itm.title}</Typography>
                      </li>
                      <li><span className='movie-field'>Overview:</span> <Typography variant='h5'>{itm.overview}</Typography>
                      </li>
                      <li><span className='movie-field'>Release date:</span> <Typography variant='h5'>{itm.release_date}</Typography>
                      </li>
                    </ul>

                  );
                })
              }
          </div>
    );
  }

}





export default LoadFavorites;
