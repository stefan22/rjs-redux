import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class SortByType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      earthquakes: this.props.earthquakes,
      magtype: '',
      labelWidth: 0,
      options: this.props.options
    };
    this.handleSortByMagtype = this.handleSortByMagtype.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const quakes = this.state.earthquakes;
    let options = [];
    quakes.map(itm => {
      if(!options.includes(itm.properties.magType)) {
        options.push(itm.properties.magType);
      }
      return options;
    });
    this.setState({
      options: options,
    });

  }

  handleChange = (event) => {
    let mag = event.target.value;
    this.setState({
      magtype: mag,
      options: this.state.options,
    });
    this.handleSortByMagtype(mag);
  };

  handleSortByMagtype(mag) {
    this.props.handleSortByMagtype(mag);
  }

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="sortMagtype">Magtype</InputLabel>
          <Select
            value={this.state.magtype}
            onChange={this.handleChange}
            inputProps={{
              name: 'magtype',
              id: 'sortMagtype',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {
              this.state.options.map((itm,index)=> {
                return (
                  <MenuItem key={index} seckey={index} value={itm}>
                    {itm}
                  </MenuItem>
                );
              })
            }
          </Select>
        </FormControl>

      </form>
    );
  }
}

SortByType.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SortByType);
