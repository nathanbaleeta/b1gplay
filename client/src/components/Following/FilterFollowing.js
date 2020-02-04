import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import { connect } from "react-redux";
//import { getSuggestions } from "../../actions/suggestions";

const styles = theme => ({
  //Style the scrollbar
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em"
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)"
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.3)",
      outline: "1px solid slategrey"
    }
  },
  root: {
    width: "100%",
    height: "100%",
    maxWidth: 462,
    backgroundColor: theme.palette.background.paper,
    position: "fixed",
    overflow: "auto",
    maxHeight: "100%",
    borderRight: "1px solid #d4d4d4"
  },

  avatar: {
    margin: 8,
    width: 50,
    height: 50
  },

  // Overiding css properties on material ui textbox
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "black !important"
  },
  // Overiding css properties on material ui textbox rounded borders
  textField: {
    [`& fieldset`]: {
      borderRadius: 0
    }
  },
  // Overiding CSS with classnames for ListItemText Implementation
  primary: {
    fontSize: "19px",
    fontWeight: "bold"
  },
  secondary: {
    fontSize: "16px"
  }
});

const filterBy = [
  {
    value: "All",
    label: "All"
  },
  {
    value: "Coach",
    label: "Coach"
  },
  {
    value: "Player",
    label: "Player"
  },
  {
    value: "Media",
    label: "Media"
  },
  {
    value: "Fans",
    label: "Fans"
  },
  {
    value: "Agent",
    label: "Agent"
  }
];

const sortedBy = [
  {
    value: "Newest To Oldest",
    label: "Newest To Oldest"
  },
  {
    value: "Oldest To Newest",
    label: "Oldest To Newest"
  }
];

class FilterFollowing extends Component {
  state = {};

  componentDidMount() {
    //this.props.getSuggestions();
  }

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Typography variant="h5" align="left" color="inherit">
              Filter:
            </Typography>
            <TextField
              id="category"
              select
              name="category"
              label="Category:"
              fullWidth
              className={classes.textField}
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true
              }}
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
            >
              {filterBy.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <br />
            <br />
            <TextField
              id="sortedBy"
              select
              name="sortedBy"
              //value={this.state.paymentMode}
              //onChange={this.onChange}
              label="Sorted by:"
              className={classes.textField}
              fullWidth
              margin="normal"
              variant="outlined"
              //helperText="Please select sorter"
              InputLabelProps={{
                shrink: true
              }}
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
            >
              {sortedBy.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

FilterFollowing.propTypes = {
  classes: PropTypes.object.isRequired
  //suggestions: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  //suggestions: state.suggestions.suggestions
});

export default connect(
  mapStateToProps,
  {}
)(withStyles(styles)(FilterFollowing));
