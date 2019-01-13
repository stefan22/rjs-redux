import React, {Component} from 'react';
import '../../scss/components/modal.scss';
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
  constructor(props) {
    super(props);
    this.handleUnfavorite = this.handleUnfavorite.bind(this);
  }

  handleUnfavorite(e) {
    console.dir(e.currentTarget);
    let pre = e.currentTarget.parentElement.parentElement.children[0];
    let title = pre.children[1].children[0].textContent;
    this.props.handleUnfavorite(title);
  }

  render() {
    console.log(this);
    const { classes,favorites,isFav } = this.props;
    return (
            <div className='favorites-list'>
              {
               isFav && favorites !== undefined && favorites.map((itm,index) => {
                  return (
                      <Card className='fav-movies-card' key={index}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            alt="{itm.title}"
                            className={classes.media}
                            height="140"
                            image={imgPath + itm.poster_path}
                            title={itm.title}
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            {itm.title}
                            </Typography>
                            <Typography component="p" className='overview'>
                            {itm.overview}
                            </Typography>
                            <Typography component='p' className='release-date'>
                            <span className='movie-release'>Release date:</span> {itm.release_date}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button className='fav-movie'
                            onClick={this.handleUnfavorite}
                            size="small" color="primary">
                            Unfavorite
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
