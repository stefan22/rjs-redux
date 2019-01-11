import React, {Component} from 'react';
//import Typography from '@material-ui/core/Typography';
import '../scss/components/modal.scss';


import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const imgPath = 'https://image.tmdb.org/t/p/w500/';

const styles = {
  card: {
    maxWidth: 345,

  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',

  },
};


class LoadFavorites extends Component {


  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  render() {
    const { classes } = this.props;
    return (
          // <div className='favorites-list'>
            <div className='favorites-list'>
              {

                this.props.favorites.map((itm,index) => {
                  return (
                      <Card className='fav-movies-card' key={index}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            alt="{itm.title}"
                            className={classes.media}
                            height="140"
                            img src={imgPath + itm.poster_path}
                            title="{itm.title}"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            {itm.title}
                            </Typography>
                            <Typography component="p" className='overview'>
                            {itm.overview}
                            </Typography>
                            <Typography component='p'>
                            <span className='movie-release'>Release date:</span> {itm.release_date}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button className='fav-movie' size="small" color="primary">
                            Share
                          </Button>
                          <Button className='fav-movie' size="small" color="primary">
                            Learn More
                          </Button>
                        </CardActions>
                      </Card>
                  );
                })
              }
          </div>
    );
  }

}

LoadFavorites.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(LoadFavorites);
